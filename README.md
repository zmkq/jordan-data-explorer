# Jordan Data Explorer (JODE)

Jordan Data Explorer is an open-source web app for exploring Jordan-focused macroeconomic, demographic, technology, infrastructure, and environmental indicators.

It combines historical data from global providers with local proxy datasets where useful, then visualizes trends with optional forward projections.

## Why This Project Exists

Public data is often fragmented across sources, formats, and update cycles. JODE provides:

- a single interface for key Jordan indicators
- consistent charting and comparison views
- transparent methodology for projections and source blending

## Core Features

- **Interactive data catalog** for 12 curated indicators
- **Dataset detail pages** with dynamic line charts
- **Live CSV ingestion** from Our World in Data (OWID) using PapaParse
- **Projection engine** using Ordinary Least Squares (OLS) linear regression
- **Recent focus mode** to zoom on the latest trend window
- **Multi-series support** for specific datasets (for example, internet and CO2)
- **Responsive UI** built with React, Tailwind CSS, and Recharts

## Included Datasets

Current catalog includes:

- Internet Penetration
- Life Expectancy
- CO2 Emissions
- Population Growth
- GDP per Capita
- Electricity Access
- Fertility Rate
- Urban Population
- Renewable Energy
- Child Mortality
- Literacy Rate
- Mobile Subscriptions

## Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router
- **Charts:** Recharts
- **Data Parsing:** PapaParse
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Getting Started

### 1) Clone

```bash
git clone https://github.com/i-love-c00kies/jordan-data-explorer.git
cd jordan-data-explorer
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - type-check and build production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Project Structure

```text
src/
  components/
    Footer.tsx
  pages/
    Home.tsx
    Datasets.tsx
    DatasetView.tsx
  App.tsx
```

- `Home.tsx` introduces the project and methodology.
- `Datasets.tsx` provides the catalog and dataset navigation.
- `DatasetView.tsx` handles live data fetch, transformation, and chart rendering.

## Data and Methodology

### Data pipeline

1. Fetch indicator CSV from OWID grapher endpoints.
2. Filter to rows where `Entity === "Jordan"`.
3. Normalize values and apply dataset-specific shaping rules.
4. Render in a multi-line chart with responsive controls.

### Projections

Forward estimates are generated with OLS linear regression using a recent historical window. Projections are intended as directional signals, not official forecasts.

### Source blending

For selected indicators, local proxy data is layered with global historical series to better represent current realities while preserving long-term trend continuity.

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit clear, focused changes
4. Open a pull request with context and screenshots (if UI changes)

## Data Source References

- [Our World in Data](https://ourworldindata.org/)
- [World Bank Open Data](https://data.worldbank.org/)
- [UN Population Division](https://population.un.org/)
- [Telecom Regulatory Commission - Jordan](https://trc.gov.jo/)

## License and Attribution

Code is open source under the repository's license terms. Data remains subject to each upstream provider's license and usage policies.
