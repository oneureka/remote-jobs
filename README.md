# Remote Jobs

A curated directory of remote-friendly companies and livable cities for digital nomads.

Built with [Astro](https://astro.build) 7 · [Tailwind CSS](https://tailwindcss.com) 4 · [daisyUI](https://daisyui.com) 5 (bumblebee)

## Pages

| Route | Content |
|---|---|
| `/` | Latest job listings |
| `/jobs` | Search & filter jobs |
| `/companies` | Companies grouped by region |
| `/companies/:id` | Company detail with remote policy |
| `/livable` | Global & China cities for nomads |
| `/livable/:city` | City detail (climate, lifestyle, visa) |

## Data Sources

- **Jobs** — `src/data.json` (inline listing)
- **Companies** — `companies/*.md` (65 markdown profiles)
- **Cities** — `nomads/livable/*.tsv` (global, china, climate, lifestyle, visa)

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
