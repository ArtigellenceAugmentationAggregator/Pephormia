# PEPHORMIA — site

Astro static site. Whole-system peptide & hormone platform (an Artigellence property).
Direction B "Lab Bright" identity. Deploys to GitHub Pages on the custom domain pephormia.com.

## Structure
- `src/pages/` — routes (home, learn, library, shop, blog)
- `src/content/blog/` — **write articles here as Markdown** (frontmatter schema in `src/content/config.ts`)
- `src/content/library/` — downloadable products (Markdown + `pdf:` path)
- `src/components/EvidenceBox.astro` — the signature graded-evidence component
- `src/styles/tokens.css` — the locked design tokens (single source of truth)
- `public/` — CNAME (custom domain), manifest, favicon, put PDFs in `public/downloads/`

## Local
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (one-time)
1. Create a GitHub repo, push this folder to `main`.
2. Repo → Settings → Pages → Build and deployment → Source = **GitHub Actions**.
3. In Hostinger DNS for pephormia.com, point the domain at GitHub Pages:
   - `A` records for apex `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www` → <your-username>.github.io
4. Every push to `main` auto-builds and deploys (`.github/workflows/deploy.yml`).

## Add a blog post
Drop a `.md` file in `src/content/blog/` with the frontmatter fields, push. Done.
