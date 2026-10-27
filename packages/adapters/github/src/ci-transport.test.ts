import { beforeEach, describe, expect, it, vi } from 'vitest';

// Stub octokit: the conformance suite runs on the in-memory transport, so only a stub shows which
// GitHub field each normalized run field is read from.
const mocks = vi.hoisted(() => ({
  listWorkflowRunsForRepo: vi.fn(),
}));

vi.mock('octokit', () => ({
  Octokit: vi.fn(() => ({
    hook: { before: vi.fn(), error: vi.fn() },
    rest: { actions: { listWorkflowRunsForRepo: mocks.listWorkflowRunsForRepo } },
  })),
}));

const { createGithubCiTransport } = await import('./ci.js');

describe('github ci listRuns', () => {
  beforeEach(() => vi.clearAllMocks());

  it('reports the commit a run built, so it can be tied to a merge', async () => {
    mocks.listWorkflowRunsForRepo.mockResolvedValue({
      data: {
        workflow_runs: [
          {
            id: 77,
            workflow_id: 3,
            name: 'CI',
            status: 'completed',
            conclusion: 'success',
            head_branch: 'main',
            head_sha: '5b3dbbe',
            run_number: 12,
            html_url: 'https://example.test/runs/77',
          },
        ],
      },
    });
    const runs = await createGithubCiTransport({ owner: 'o', repo: 'r', token: 'x' }).listRuns({});
    expect(runs[0]).toMatchObject({ id: '77', branch: 'main', sha: '5b3dbbe' });
  });

  it('asks GitHub for the runs of a commit by head_sha, not a window filtered afterwards', async () => {
    mocks.listWorkflowRunsForRepo.mockResolvedValue({ data: { workflow_runs: [] } });
    await createGithubCiTransport({ owner: 'o', repo: 'r', token: 'x' }).listRuns({
      branch: 'main',
      sha: '502364e',
    });
    expect(mocks.listWorkflowRunsForRepo).toHaveBeenCalledWith(
      expect.objectContaining({ branch: 'main', head_sha: '502364e' }),
    );
  });
});
