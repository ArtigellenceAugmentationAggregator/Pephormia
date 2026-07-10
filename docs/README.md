# PEPHORMIA — static site (deploy from /docs)

Plain HTML. No build step.

## Deploy (3 steps)
1. Drag this whole `docs` folder into your repo's root (Add file -> Upload files -> drop the `docs` folder). Commit.
2. Settings -> Pages -> Source -> "Deploy from a branch" -> branch `main` -> folder `/docs` -> Save.
3. Wait ~2 min, hard-refresh pephormia.com (Ctrl+Shift+R).

CNAME (pephormia.com) is inside, so the domain stays. Any old `pephormia` folder already in the repo can be ignored or deleted later — Pages serves from `/docs`.

## Edit later
- Look & feel: `docs/assets/styles.css`
- Add a blog post: copy a folder in `docs/blog/`, edit the text + the meta tags in <head>, add a row to `docs/blog/index.html`.
- Subscribe form: in `docs/index.html`, search "WIRE YOUR LIST" and paste your Beehiiv endpoint into the form action.
