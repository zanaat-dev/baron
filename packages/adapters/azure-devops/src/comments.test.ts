import { beforeEach, describe, expect, it, vi } from 'vitest';

// Stub the Azure SDK: only a stub shows the transport following Azure's continuation token, which a
// live thread rarely runs long enough to exercise.
const mocks = vi.hoisted(() => ({ getComments: vi.fn() }));

vi.mock('azure-devops-node-api', () => ({
  WebApi: vi.fn(() => ({
    getWorkItemTrackingApi: async () => ({ getComments: mocks.getComments }),
  })),
  getPersonalAccessTokenHandler: vi.fn(() => ({})),
}));

const { createAzureDevOpsTransport } = await import('./transport.js');

describe('azure listComments', () => {
  beforeEach(() => vi.clearAllMocks());

  it('follows the continuation token and keeps the oldest-first order it asked for', async () => {
    const comment = (id: number) => ({
      id,
      text: `<p>note ${id}</p>`,
      createdBy: { displayName: 'Dev' },
      createdDate: new Date(`2026-10-0${id}T00:00:00Z`),
      url: `u/${id}`,
    });
    mocks.getComments
      .mockResolvedValueOnce({ comments: [comment(1), comment(2)], continuationToken: 'next' })
      .mockResolvedValueOnce({ comments: [comment(3)] });
    const t = createAzureDevOpsTransport({ organization: 'org', project: 'Proj', token: 'x' });
    const comments = await t.listComments('7');

    expect(comments.map((c) => c.id)).toEqual(['1', '2', '3']);
    // Azure keeps comments as HTML; the body is handed on as stored.
    expect(comments[0]).toMatchObject({ body: '<p>note 1</p>', author: 'Dev' });
    expect(mocks.getComments.mock.calls[1]?.[3]).toBe('next');
    expect(mocks.getComments.mock.calls[0]?.[6]).toBe(1); // CommentSortOrder.Asc
  });
});
