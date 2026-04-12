# Neural Nexus Studios — Next.js (GitHub Pages)

Dark-themed Next.js site with ChatGPT-style animations, tailored for deployment under `https://avishakeadhikary.github.io/Neural-Nexus-Studios/`.

## Tech
- Next.js App Router, static export (`output: 'export'`)
- Tailwind CSS (dark/red/black theme), Framer Motion
- Local JetBrains Mono via `@fontsource-variable/jetbrains-mono` (no CDNs)

## Local Development
```bash
npm install
npm run dev
```
Dev server mounts under the base path `/Neural-Nexus-Studios`.

## Build & Export (Static)
```bash
npm run build
# output in ./out ready for GitHub Pages
```

## Deploy to GitHub Pages
Two common options:

1) Use a `gh-pages` branch
```bash
npm run build
npx gh-pages -d out -b gh-pages
```
Then enable GitHub Pages on the `gh-pages` branch in repository settings.

2) Use the `docs/` folder on `main`
```bash
npm run build
git add -f out
git commit -m "Export site"
git subtree push --prefix out origin main:docs
```
Then set Pages source to `docs/`.

Base path is already configured in `next.config.mjs`.

## Structure
- `app/` — pages (`/`, `/about`, `/services`, `/contact`), layout, globals
- `components/` — animated UI (typing title, chat bubbles, glow cards)
- `public/` — favicon, robots.txt, manifest.json

## License & Assets
All UI code here is original. Icons from `lucide-react` (MIT). Fonts from `@fontsource-variable/jetbrains-mono` (Open Font License) are bundled locally at build time — no external calls at runtime.
