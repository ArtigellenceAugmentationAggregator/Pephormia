# PEPHORMIA — plain static site

No framework, no build step. These are hand-editable HTML files served directly by
GitHub Pages, exactly like your other HTML projects.

## How to put it live (replaces the old Astro setup)

1. In your GitHub repo, **delete the old build**: the `pephormia-site/` folder and the
   `.github/workflows/` folder (both `deploy.yml` / `deploy.ym`). You no longer need the
   Actions robot — it was only there to build Astro.
2. **Upload everything from this folder to the repository root** (so `index.html`,
   `assets/`, `learn/`, `shop/`, etc. sit directly in the repo, not inside a subfolder).
3. GitHub → **Settings → Pages → Build and deployment → Source: “Deploy from a branch”**,
   branch **main**, folder **/(root)**. Save.
4. The `CNAME` file (pephormia.com) is included, so your domain stays. Tick
   **“Enforce HTTPS”** on the Pages settings once the certificate provisions (a few minutes).
5. Hard-refresh the site (Ctrl/Cmd + Shift + R).

That's it. Every future edit = change an `.html` file, commit, push. No build, nothing to break.

## Editing

- **Look & feel** — everything lives in `assets/styles.css` (one file, one palette).
- **Header / footer** — repeated at the top/bottom of each page between the
  `<!-- SITE HEADER -->` / `<!-- SITE FOOTER -->` markers. If you change a nav link,
  find-and-replace it across the files.
- **Add a blog post** — copy any folder in `blog/`, rename it, edit the `<h1>`, the meta
  tags in `<head>`, and the article text. Then add a matching `<a class="post">` row to
  `blog/index.html`.
- **Email capture** — the Subscribe form on the homepage (`#briefing`) posts to a
  placeholder URL. Replace the `action="..."` in `index.html` with your real Beehiiv (or
  Shopify / Klaviyo) form endpoint. Search the file for `WIRE YOUR LIST`.

## Built in for promotion (Shopify / TikTok / Insta / Amazon)

- SEO: unique `<title>` + meta description, canonical URL, and a `sitemap.xml` on every page.
- Social share: Open Graph + Twitter Card tags and a branded share image (`assets/og.png`)
  so links preview cleanly when posted.
- Mobile-first, fast static load. Structured-data (Organization) on the homepage.

## Pages
Home, Learn (+ 9 goal banks), Library, Shop, Perfumes, Blog (+ 3 posts), Investors, 404.
