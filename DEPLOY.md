# GitHub Pages — mangaljewel

**Live URL:** https://rahulsoni2020.github.io/mangaljewel/  
**Custom GoDaddy domain:** see **[GODADDY-DOMAIN.md](./GODADDY-DOMAIN.md)**

---

## If deploy failed with 404

The old workflow needed **GitHub Actions** as the Pages source. The new workflow publishes to the **`gh-pages` branch** instead.

### One-time setup (do this once)

1. Open: https://github.com/rahulsoni2020/mangaljewel/settings/pages

2. Under **Build and deployment** → **Source**, select:
   - **Deploy from a branch** (not “GitHub Actions”)

3. Under **Branch**:
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**

4. Click **Save**

5. Open: https://github.com/rahulsoni2020/mangaljewel/actions  
   Run **Deploy to GitHub Pages** → **Run workflow** (or push to `main`)

6. Wait ~2 minutes. Refresh **Settings → Pages** — you should see “Your site is live at …”

---

## Notes

- First deploy creates the `gh-pages` branch automatically.
- Repo must be **Public** (or have GitHub Pages on your plan if private).
- Site path: `/mangaljewel/` — already set in the workflow build.
