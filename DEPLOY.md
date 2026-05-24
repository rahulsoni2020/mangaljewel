# Deploy to GitHub Pages — mangaljewel

Repo: **https://github.com/rahulsoni2020/mangaljewel**

Live URL (after deploy works): **https://rahulsoni2020.github.io/mangaljewel/**

---

## Fix: "Failed to create deployment (404)"

This means **GitHub Pages is not enabled** or the source is not set to **GitHub Actions**.

### Enable Pages (required — one time)

1. Open: **https://github.com/rahulsoni2020/mangaljewel/settings/pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Save if prompted.

### Re-run the deploy

1. Open: **https://github.com/rahulsoni2020/mangaljewel/actions**
2. Click **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**

Or push any commit to `main`:

```powershell
cd "c:\Users\rahul\OneDrive\Desktop\mj"
git add .
git commit -m "Fix GitHub Pages workflow"
git push origin main
```

Wait 1–2 minutes. The **deploy** job should turn green.

---

## Push updates later

```powershell
git add .
git commit -m "Your message"
git push origin main
```

---

## Local build (same path as production)

```powershell
$env:VITE_BASE="/mangaljewel/"
npm run build
npm run preview
```
