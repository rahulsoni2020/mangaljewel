# Connect your GoDaddy domain to GitHub Pages

Repo: **rahulsoni2020/mangaljewel**

After setup, your site opens at **https://www.yourdomain.com** (replace with your real domain).

---

## Step 1 — Pick your website address

Recommended:

- **www.mangaljewel.com** → main site (use this in GitHub)
- **mangaljewel.com** → forward to www (optional)

Replace `mangaljewel.com` with whatever you bought on GoDaddy.

---

## Step 2 — Tell GitHub your domain

1. Open: https://github.com/rahulsoni2020/mangaljewel/settings/pages  
2. Under **Custom domain**, type: `www.yourdomain.com`  
3. Click **Save**  
4. Wait until DNS check runs (can take minutes to 48 hours).

---

## Step 3 — Add DNS records in GoDaddy

1. Log in to **GoDaddy** → **My Products** → your domain → **DNS** (or **Manage DNS**).

### Record A — for `www` (recommended)

| Type  | Name | Value                 | TTL  |
|-------|------|-----------------------|------|
| CNAME | www  | `rahulsoni2020.github.io` | 1 Hour |

### Records for root `@` (so `yourdomain.com` works too)

Add **four** A records:

| Type | Name | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 600  |
| A    | @    | 185.199.109.153 | 600  |
| A    | @    | 185.199.110.153 | 600  |
| A    | @    | 185.199.111.153 | 600  |

*(These are GitHub Pages IP addresses.)*

### Optional — redirect bare domain to www in GoDaddy

**Forwarding** (GoDaddy):

- From: `yourdomain.com`  
- To: `https://www.yourdomain.com`  
- Type: Permanent (301)

---

## Step 4 — CNAME file in this project

1. Copy the example file:

   ```text
   public/CNAME.example  →  public/CNAME
   ```

2. Edit `public/CNAME` so it contains **only** your domain (one line), e.g.:

   ```text
   www.mangaljewel.com
   ```

   No `https://`, no trailing slash.

3. Commit and push:

   ```powershell
   git add public/CNAME
   git commit -m "Add custom domain for GoDaddy"
   git push origin main
   ```

4. Wait for the GitHub Action to finish.

---

## Step 5 — HTTPS

When DNS is correct, GitHub shows a green check on **Custom domain**.

1. Turn on **Enforce HTTPS** on the same Pages settings page.  
2. Certificate can take up to 24 hours the first time.

---

## Step 6 — Test

- https://www.yourdomain.com  
- https://rahulsoni2020.github.io/mangaljewel/ may still work, but your main URL is the custom domain.

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| Site loads but no CSS/images | Re-deploy after `VITE_BASE=/` (already set in workflow). Hard-refresh browser (Ctrl+F5). |
| “Domain not verified” | Wait for DNS (up to 48h). Check CNAME `www` → `rahulsoni2020.github.io`. |
| HTTPS not available | DNS must be correct first; then wait for certificate. |
| Wrong site / 404 | Pages source = **gh-pages** branch, folder **/ (root)**. |

---

## Quick checklist

- [ ] GoDaddy CNAME: `www` → `rahulsoni2020.github.io`  
- [ ] GoDaddy A records for `@` (4 IPs above)  
- [ ] GitHub Pages → Custom domain saved  
- [ ] `public/CNAME` created and pushed  
- [ ] **Enforce HTTPS** enabled  
