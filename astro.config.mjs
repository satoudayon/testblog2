// @ts-check
import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'satoudayon';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'testblog2';
const isUserSite = repository === `${owner}.github.io`;
const isBuild = process.env.NODE_ENV === 'production';
const base = isBuild && !isUserSite ? `/${repository}` : '/';

export default defineConfig({
	site: `https://${owner}.github.io${isUserSite ? '' : `/${repository}`}`,
	base,
});
