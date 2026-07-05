# Remote Jobs

A curated directory of remote-friendly companies and livable cities for digital nomads. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) + [daisyUI](https://daisyui.com).

## Content

### Companies (65)

Company profiles with remote work policies, stored as Markdown files in `companies/`. Each entry includes:

| Field | Description |
|---|---|
| `companyName` | Company name |
| `remotePolicy` | `Remote`, `Hybrid`, `Remote-Friendly`, or `On-site` |
| `industry` | Industry categories |
| `website` | Company URL |
| `region` | Geographic region (North America, Europe, Asia) |
| Body | Bilingual description (English + Chinese) |

### Cities

City data for digital nomads, stored as TSV files in `nomads/livable/`.

| File | Rows | Description |
|---|---|---|
| `global.tsv` | 69 | Global cities with AQI, temperature, cost tier, min wage |
| `china.tsv` | 101 | Chinese cities (same schema, includes "Very High" cost tier) |
| `climate.tsv` | 170 | Climate type, description, and disaster risk |
| `global_extra.tsv` | 69 | Environmental performance, safety index, cultural tags |
| `lifestyle.tsv` | 101 | Store counts (Apple Store, Costco, IKEA, MUJI, etc.) |
| `visa.tsv` | 26 | Visa policy by country |

## Tech Stack

- **Framework**: [Astro](https://astro.build) v7
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **UI Library**: [daisyUI](https://daisyui.com) v5 (fantasy theme)
- **Language**: TypeScript (strict mode)

## Project Structure

```
src/
├── assets/
│   └── app.css                   # Tailwind + daisyUI config
├── content.config.ts             # Content collection definitions
├── layouts/
│   └── Layout.astro              # Global layout
├── pages/
│   ├── index.astro               # Homepage — companies by region
│   └── livable/
│       └── index.astro           # Livable cities by region
companies/                        # 65 company markdown files
nomads/
  └── livable/                    # City TSV datasets
```

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI |
