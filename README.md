# Country Explorer

Country Explorer is a React-based web app that lets users browse countries, search by name, and view detailed information about each country including population, capital, GDP, currency, and life expectancy.

## Features

- Search for countries by name
- Browse a responsive country card grid
- Open a dedicated details page for each country
- View country flags from the Flag CDN service
- Explore structured country data from a local JSON file

## Tech Stack

- React
- JavaScript
- React Router
- CSS
- Bulma-style utility classes

## Project Structure

```text
Countries_of_the_world_JavascriptFinalProject/
├── App.js
├── index.css
├── index.html
├── index.js
├── package.json
├── components/
│   ├── CountryCard.js
│   └── SearchBar.js
├── data/
│   └── countries.json
├── pages/
│   ├── Countries.js
│   └── CountryDetails.js
├── .gitignore
├── README.md
└── package-lock.json
```

## How it works

- `pages/Countries.js` loads the country dataset and filters it based on the search term.
- `components/CountryCard.js` renders individual cards with country details and a "More Info" link.
- `pages/CountryDetails.js` reads the selected country code from the URL and shows a detailed view.
- `App.js` configures the routes for the home page and country detail page.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ArushiNaik/Countries_of_the_world_JavascriptFinalProject.git
cd Countries_of_the_world_JavascriptFinalProject
```

2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm start
```

4. Open your browser and go to:

```text
http://localhost:3000
```

## Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite

## Data Source

The application uses `data/countries.json` as its local data source for country information.

## License

This project is for educational and personal use.
