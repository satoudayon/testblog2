// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'your-github-user';
const isUserSite = repository === `${owner}.github.io`;

export default defineConfig({
	site: `https://${owner}.github.io`,
	base: isGitHubActions && repository && !isUserSite ? `/${repository}` : '/',
});
