# Finance Calculator AJFC

React + Vite project ready for GitHub.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Publish with GitHub Pages
Because this is a Vite project, if you publish under a repository path such as:
`https://username.github.io/finance-calculator-ajfc/`

update `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/finance-calculator-ajfc/",
});
```

Then run:

```bash
npm run build
```

Upload the `dist` contents to GitHub Pages, or use a GitHub Actions deploy flow.

## Notes
- UI uses the Saudi Riyal symbol image inline.
- Theme is aligned to the provided IMS screenshot style.
- Settings page is included for finance/sales configuration.
- Intended backend integration: .NET API.
