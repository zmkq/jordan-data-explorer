# Jordan Data Explorer (JODE)

Jordan Data Explorer (JODE) is an open-source web app designed for exploring Jordan-focused macroeconomic, demographic, technology, infrastructure, and environmental indicators. It provides a single, lightning-fast interface for 24 key Jordan indicators, combining historical data from global providers with local proxy datasets.

## 🚀 The "Titan" Projection Engine (v4.6)

JODE has evolved beyond basic linear models to the **Titan Projection Engine**. This sophisticated heuristic model is designed to handle the nuances of Jordanian data, including structural breaks and historical gaps.

* **Step 0: Chronological Interpolation:** Automatically detects years with missing data and applies linear interpolation to create a contiguous timeline.
* **Outlier Resiliency:** Uses a moving median pass to ignore economic "shocks" or reporting errors.
* **Regime Detection:** Automatically switches between **Logistic Saturation** (for percentages hitting 100%), **Multiplicative Growth** (for GDP/Population), and **Dampened Linear Trends**.
* **Division-by-Zero Guards:** Hardened to handle indicators starting at absolute zero (e.g., early internet penetration).
* **Asymptotic Bounding:** Prevents negative values and caps percentage-based metrics exactly at 100% unless explicitly uncapped.

## ✨ Core Features

* **Interactive Data Catalog:** 24 curated macroeconomic and demographic indicators with a minimalist "Swiss-Data" aesthetic.
* **Comparison Engine:** Compare multiple indicators on a synchronized, multi-axis chart with interactive legend toggles.
* **Data Hybridization:** Features a unique "Local vs. Global" data strategy, prioritizing **Telecom Regulatory Commission (TRC)** data for technology metrics.
* **Sub-line Granularity:** * **Life Expectancy:** Automatic split into Male/Female historical and projected lines.
    * **CO₂ Emissions:** Sectoral breakdowns across Energy, Transport, and Industry.
* **High-Performance Architecture:** Utilizes `sessionStorage` caching, `useMemo` computation caching, and route-based code splitting for zero-latency rendering.

## 📊 Included Datasets (24)

1. Internet Penetration
2. Life Expectancy
3. CO₂ Emissions
4. Population Growth
5. GDP per Capita
6. Electricity Access
7. Fertility Rate
8. Urban Population Share
9. Renewable Electricity
10. Child Mortality
11. Literacy Rate
12. Mobile Subscriptions
13. Water Scarcity
14. Unemployment Rate
15. Consumer Price Index (CPI)
16. Human Development Index (HDI)
17. Infant Mortality
18. Government Spending
19. Out-of-Pocket Health Expenditure
20. Female Labor Force Participation
21. Daily Protein Supply
22. Remittances to GDP
23. Electricity Generation
24. Agricultural Land Area

## 🛠 Tech Stack

* **Frontend:** React 19 + TypeScript
* **Build Tool:** Vite
* **Routing:** React Router (with `lazy` and `Suspense`)
* **Charts:** Recharts
* **Data Parsing:** PapaParse
* **Styling:** Tailwind CSS V4
* **State Management:** React Context API (Theming)

## 📖 Methodology

1.  **The Pipeline:** JODE checks `sessionStorage` for cached data; if empty, it fetches live CSV data from Our World in Data (OWID). 
2.  **Normalization:** Values are filtered for "Jordan," normalized, and processed through the Titan Engine for forward projections.
3.  **Projections:** Forward estimates are directional signals based on historical momentum, not official forecasts.

## 🏛 Data Sources

JODE aggregates data from the following institutions via Our World in Data:
* World Bank Open Data
* United Nations (UN) & UNIGME
* International Monetary Fund (IMF)
* World Health Organization (WHO)
* International Labour Organization (ILO)
* Food and Agriculture Organization (FAO)
* Ember Climate
* International Telecommunication Union (ITU)
* Telecom Regulatory Commission - Jordan (TRC)

## ⚖️ License

Code is open source under the repository's license terms. Data remains subject to each upstream provider's specific open-data license and usage policies.