# Deploy the v2.4.2 frontend on GitHub Pages
1. Review and merge the pull request into `main`.
2. Open repository **Settings → Pages** and select **GitHub Actions** as build/deployment source.
3. Run **Actions → BMverse v2.4.2 static platform → Run workflow**, or push a change under `platform/`.
4. Check workflow success and Pages URL (expected repository-project URL: https://beautifullminds.github.io/bmverse-frontend/ unless a custom domain or Pages settings differ).
5. Review responsive navigation and NFT placeholders; verify external links.
The workflow builds `platform/` with `GITHUB_PAGES=true`, exports `platform/out`, and deploys that output. No API routes, transaction settlement, database or private configuration are included.
**Caution:** enabling this Pages workflow on main can replace any existing Pages content for this repository. Check current Pages source before merging.
