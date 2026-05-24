# Deploy MJ Jewels to GitHub Pages

Everything is already configured in this repo:

- `vite.config.js` — uses `VITE_BASE` for GitHub Pages paths
- `.github/workflows/deploy.yml` — builds & deploys on every push to `main`

## One-time setup (about 2 minutes)

### 1. Log in to GitHub

Open PowerShell in this folder and run:

```powershell
gh auth login
```

Choose: **GitHub.com** → **HTTPS** → **Login with a web browser** (follow the prompts).

### 2. Create repo and push

```powershell
cd "c:\Users\rahul\OneDrive\Desktop\mj"
gh repo create mj --public --source=. --remote=origin --push
```

If the name `mj` is taken, pick another name (e.g. `mj-jewels`) and update the URL below.

### 3. Enable GitHub Pages

```powershell
gh api repos/{owner}/mj/pages -X POST -f "build_type=workflow"
```

Or in the browser:

1. Open your repo on GitHub
2. **Settings** → **Pages**
3. **Build and deployment** → Source: **GitHub Actions**

### 4. Wait for deploy

```powershell
gh run watch
```

Or check **Actions** tab on GitHub. First deploy takes ~1–2 minutes.

## Live site URL

```
https://<your-github-username>.github.io/mj/
```

Example: `https://rahul-soni.github.io/mj/` (replace with your username).

## Later updates

```powershell
git add .
git commit -m "Your message"
git push
```

Each push to `main` redeploys automatically.
