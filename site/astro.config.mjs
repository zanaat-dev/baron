// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig, passthroughImageService } from 'astro/config';
import starlightLlmsTxt from 'starlight-llms-txt';

const REPO = 'https://github.com/zanaat-dev/baron';
const SITE = 'https://baron.zanaat.dev';
const SHARE_IMAGE = `${SITE}/og.png`;

export default defineConfig({
  site: SITE,
  // The docs have no index page of their own; /docs/ lands on the first page instead of a 404.
  redirects: { '/docs': '/docs/getting-started/' },
  // The docs carry no raster images that need resizing, and sharp is a native dependency this
  // monorepo would otherwise have to install and approve for nothing.
  image: { service: passthroughImageService() },
  // Fonts ship as their own files rather than data URIs inlined into the CSS: cacheable on their own,
  // and what the design review's capture requires.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [
    starlight({
      title: 'Baron',
      description:
        'One contract for issues, branches, pull requests, CI and deployments, so a coding agent can write to any work tracker.',
      logo: { light: './src/assets/mark-light.svg', dark: './src/assets/mark-dark.svg' },
      favicon: '/favicon.svg',
      // Starlight writes the title, description and card type per page; the image is the landing's share card.
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: SHARE_IMAGE } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: SHARE_IMAGE } },
        // The docs follow the system theme, so the browser chrome takes the ground of each.
        {
          tag: 'meta',
          attrs: { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#0e0e0f' },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            media: '(prefers-color-scheme: light)',
            content: '#fbfaf7',
          },
        },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: REPO }],
      // docs/ at the repository root is the source; the site copy is generated (scripts/sync-docs.mjs).
      editLink: { baseUrl: `${REPO}/edit/main/` },
      lastUpdated: false,
      customCss: [
        '@fontsource/funnel-sans/400.css',
        '@fontsource/funnel-sans/500.css',
        '@fontsource/funnel-sans/600.css',
        '@fontsource/geist-mono/400.css',
        '@fontsource/geist-mono/500.css',
        './src/styles/theme.css',
      ],
      components: { Footer: './src/components/Footer.astro', Head: './src/components/Head.astro' },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      plugins: [
        starlightLlmsTxt({
          projectName: 'Baron',
          description:
            'Baron is an open-source work-orchestration layer for AI coding agents: issues, branches, pull requests, CI runs and deployments behind one normalized contract, across Azure DevOps, GitHub, Jira, Linear and Slack.',
        }),
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Getting started', slug: 'docs/getting-started' },
            { label: 'Concepts', slug: 'docs/concepts' },
            { label: 'Trying it with Claude Code', slug: 'docs/trying-with-claude-code' },
          ],
        },
        {
          label: 'Set up a provider',
          items: [
            { label: 'Azure DevOps', slug: 'docs/setup-azure-devops' },
            { label: 'Jira Cloud', slug: 'docs/setup-jira' },
            { label: 'Linear', slug: 'docs/setup-linear' },
            { label: 'Supported providers', slug: 'docs/providers' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Configuration', slug: 'docs/configuration' },
            { label: 'Recipes', slug: 'docs/recipes' },
            { label: 'CLI', slug: 'docs/cli' },
            { label: 'MCP server & plugin', slug: 'docs/mcp' },
          ],
        },
      ],
    }),
  ],
});
