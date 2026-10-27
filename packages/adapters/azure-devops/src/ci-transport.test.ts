import { beforeEach, describe, expect, it, vi } from 'vitest';

// Stub the Azure SDK: the conformance suite runs on the in-memory transport and cannot see what the
// live adapter asks Azure for — which is exactly where the branch filter went missing.
const mocks = vi.hoisted(() => ({
  getBuilds: vi.fn(),
}));

vi.mock('azure-devops-node-api', () => ({
  WebApi: vi.fn(() => ({
    getBuildApi: async () => ({ getBuilds: mocks.getBuilds }),
  })),
  getPersonalAccessTokenHandler: vi.fn(() => ({})),
}));

const { createAzureDevOpsCiTransport } = await import('./ci.js');

const transport = () =>
  createAzureDevOpsCiTransport({ organization: 'org', project: 'proj', token: 'x' });

describe('azure ci listRuns', () => {
  beforeEach(() => vi.clearAllMocks());

  it('asks Azure for the branch, newest queued first, instead of filtering a window afterwards', async () => {
    // Found live: filtering client-side spent `top` on other branches' builds, so a build queued a
    // moment ago on the asked-for branch was invisible — the same query returned nothing at limit 5
    // and the build at limit 50.
    mocks.getBuilds.mockResolvedValue([
      {
        id: 4681,
        status: 32,
        sourceBranch: 'refs/heads/task/2003-x',
        sourceVersion: '9f1c2e7',
        definition: { id: 59 },
      },
    ]);
    const runs = await transport().listRuns({ branch: 'task/2003-x', limit: 5 });
    expect(runs.map((r) => r.id)).toEqual(['4681']);
    // The commit the build ran on: what ties a run, and the deploy after it, to a merge.
    expect(runs[0]?.sha).toBe('9f1c2e7');

    const args = mocks.getBuilds.mock.calls[0] as unknown[];
    expect(args[0]).toBe('proj');
    expect(args[12]).toBe(5); // top
    expect(args[16]).toBe(4); // BuildQueryOrder.QueueTimeDescending
    expect(args[17]).toBe('refs/heads/task/2003-x'); // branchName, the server-side filter
  });

  it('finds the build of a commit by scanning the branch window, since Azure has no commit filter', async () => {
    // Live shape (BeeMaster): PR 1869 merged into dev as 8d5a750e, and build 4284 on dev built it.
    mocks.getBuilds.mockResolvedValue([
      {
        id: 4290,
        status: 2,
        sourceBranch: 'refs/heads/dev',
        sourceVersion: '1a2b3c4',
        definition: { id: 59 },
      },
      {
        id: 4284,
        status: 2,
        sourceBranch: 'refs/heads/dev',
        sourceVersion: '8d5a750e',
        definition: { id: 59 },
      },
    ]);
    const runs = await transport().listRuns({ branch: 'dev', sha: '8d5a750e', limit: 5 });
    expect(runs.map((r) => r.id)).toEqual(['4284']);
    const args = mocks.getBuilds.mock.calls[0] as unknown[];
    expect(args[12]).toBe(50); // top: the scan window, wider than the limit of 5
    expect(args[17]).toBe('refs/heads/dev');
  });

  it('maps a pull request to its merge ref, and reads the PR id back off a build on one', async () => {
    mocks.getBuilds.mockResolvedValue([
      { id: 4284, status: 32, sourceBranch: 'refs/pull/1869/merge', definition: { id: 59 } },
    ]);
    const runs = await transport().listRuns({ pullRequestId: '1869', limit: 5 });
    expect(runs).toEqual([
      expect.objectContaining({ id: '4284', pullRequestId: '1869', branch: undefined }),
    ]);
    const args = mocks.getBuilds.mock.calls[0] as unknown[];
    expect(args[17]).toBe('refs/pull/1869/merge');
  });

  it('passes no branch when none was asked for, and keeps the queue-time order', async () => {
    mocks.getBuilds.mockResolvedValue([]);
    await transport().listRuns({ limit: 3 });
    const args = mocks.getBuilds.mock.calls[0] as unknown[];
    expect(args[12]).toBe(3);
    expect(args[16]).toBe(4);
    expect(args[17]).toBeUndefined();
  });
});
