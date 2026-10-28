# Country Explorer

A sleek React application for exploring countries around the world. Users can search for countries, browse a visual grid of cards, and click through to a detailed information page for each nation.

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React_Router-7.5.3-CA4245?logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Style-Bulma-00D1B2?logo=bulma&logoColor=white" alt="Bulma" />
</p>

## Overview

Country Explorer is a modern frontend project built with React that turns a large country dataset into an intuitive browsing experience. The app emphasizes fast search, clean UI, and easy navigation between a list view and an individual country detail page.

This project demonstrates:

- dynamic filtering and client-side search
- reusable component-based UI design
- route-based navigation with React Router
- structured data rendering from a JSON dataset
- responsive card-based layout

## Features

- Search countries by name in real time
- View country cards with flag, capital, official language, and population
- Navigate to a dedicated details page for each country
- Display rich country statistics such as GDP, population, and life expectancy
- Responsive layout for browsing on desktop and smaller screens
- Clean, minimal styling with a professional dashboard feel

## Tech Stack

- React
- JavaScript
- React Router DOM
- JSON data modeling
- CSS / Bulma-inspired styling

## Project Structure

```text
Countries_of_the_world_JavascriptFinalProject/
├── App.js
├── index.css
├── index.html
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
├── components/
│   ├── CountryCard.js
│   └── SearchBar.js
├── data/
│   └── countries.json
├── pages/
│   ├── Countries.js
│   └── CountryDetails.js
└── public/
```

## How It Works

- `pages/Countries.js` loads the country dataset and filters records based on the user's search.
- `components/SearchBar.js` handles the live text input for searching.
- `components/CountryCard.js` renders each country as a visual card with essential information.
- `pages/CountryDetails.js` fetches the selected country by abbreviation and shows extended details.
- `App.js` defines route navigation between the home page and each country details page.

## Live Demo

Run the app locally and explore the countries in your browser:

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm start
npm run build
npm test
```

## Data Source

The application uses a dataset stored in `data/countries.json`, containing structured country information such as:

- country name
- abbreviation
- capital city
- official language
- population
- GDP
- currency code
- life expectancy

## Why This Project Stands Out

This project combines a polished user experience with a real-world data-driven workflow. It demonstrates strong frontend fundamentals including filtering, routing, reusable components, and structured content presentation—making it a solid showcase project for a JavaScript and React portfolio.

## Future Enhancements

- add continent filters and sorting options
- include a favorites feature
- implement dark mode
- add map-based country visualization
- improve accessibility and keyboard navigation

## License

This project is intended for educational and personal portfolio use.

## Author

Built as a JavaScript final project by Arushi Naik.
