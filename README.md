# Ateş Pizza & Kebab

A simple, modern one-page site for a pizza & kebab restaurant: menu, story,
ordering info, and a click-to-call button. No build step — plain HTML/CSS/JS
plus a tiny Node server so it can run on Railway.

## Project structure

```
.
├── index.html        # the whole page
├── 404.html          # not-found page
├── css/styles.css    # all styling
├── js/script.js      # footer year + smooth-scroll
├── server.js         # tiny static file server (used only when deployed)
├── package.json       # start script Railway runs
└── .gitignore
```

## Before you launch: edit these

Everything customer-facing lives in `index.html`. Search for and update:

- **Phone number** — replace every `tel:+358401234567` and the visible
  `040 123 4567` text with the real number.
- **Address & map link** — in the "Find us" section, update the street
  address and the Google Maps link.
- **Opening hours** — in the hours table.
- **Menu items & prices** — inside `<section id="menu">`, each row is a
  `<li>` with a name, short description, and price.
- **Restaurant name / story** — the "Our Story" section and page title.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install    # nothing to install yet, but keeps npm happy
npm start
```

Then open **http://localhost:3000**. Editing the HTML/CSS/JS files and
refreshing the browser is enough — no build step.

(You can also just double-click `index.html` to preview it without Node,
but use `npm start` before deploying so it behaves the same way Railway will run it.)

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Railway

1. Go to [railway.app](https://railway.app) and sign in with GitHub.
2. **New Project → Deploy from GitHub repo** → select this repository.
3. Railway detects `package.json` automatically and runs `npm start`.
4. Once deployed, open the **Settings** tab of the service and click
   **Generate Domain** to get a public URL.

Every time you push to `main` on GitHub, Railway redeploys automatically.

### Environment

No environment variables or database are required. The server only reads
`PORT`, which Railway sets automatically.
