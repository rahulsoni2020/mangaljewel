# MJ Jewels — Rajasthan City Collections

React jewelry storefront organized by **5 Rajasthan city collections** (market strategy buckets).

## City collections

| City | Theme | Jewelry focus |
|------|--------|----------------|
| **Udaipur** | White City · City of Lakes | Pearls, silver, lake-inspired kundan |
| **Jodhpur** | Blue City | Jodhpuri craft, blue diamond accents |
| **Jaisalmer** | Golden City | Pure gold, 22K heritage, sonar work |
| **Jaipur** | Pink City | Rose gold, polki, gemstone sets |
| **Chittorgarh** | Land of Forts | Traditional Rajasthani, jadau, Rajputana |

## Run locally

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

Pushes to `main` auto-deploy via GitHub Actions.

Live URL: `https://<your-username>.github.io/mj/` (if the repo is named `mj`)

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Structure

- `src/data/collections.js` — collection & product data (single source of truth)
- `src/components/Collections.jsx` — 5 city collection cards
- `src/components/FeaturedProducts.jsx` — one signature piece per city

Collection data lives in `collections.js` — edit names, copy, images, and counts there when you add real inventory.
