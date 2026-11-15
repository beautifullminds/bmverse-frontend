# BMverse platform preview
New Next.js/React/TypeScript front end built alongside, not over, the existing React application.
```bash
cd platform
npm install
npm run dev
npm run build
```
GitHub Pages static export uses `GITHUB_PAGES=true npm run build` and the workflow at `.github/workflows/bmverse-platform-pages.yml`.
Only static UI is deployable to Pages. The DEX, marketplace purchasing, account backend and admin actions are deliberately not enabled.
