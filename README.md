# 🌍 Countries of the World

A modern React application built with Vite and Tailwind CSS 3 that displays comprehensive information about countries around the world.

## Features

- **Country Information**: Detailed data about 25+ countries including population, area, GDP, government type, languages, and more
- **Search Functionality**: Search countries by name, capital, or languages
- **Region Filtering**: Filter countries by continent/region (Africa, Asia, Europe, North America, South America, Oceania)
- **Responsive Design**: Modern, mobile-first design using Tailwind CSS 3
- **Interactive Cards**: Beautiful country cards with rich information display

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **JavaScript** - Programming language

## Project Structure

```
src/
├── components/
│   ├── CountryCard.jsx    # Individual country card component
│   ├── SearchBar.jsx      # Search input component
│   └── FilterBar.jsx      # Region filter component
├── data/
│   └── countries.js       # Country data and helper functions
├── App.jsx                # Main application component
└── index.css              # Tailwind CSS imports
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Data Structure

Each country object contains:
- Basic info (name, capital, population, area)
- Geographic data (region, continent, timezone)
- Economic data (GDP, currency)
- Cultural data (languages, government type)
- Visual elements (flag emoji)
- Descriptive information

## Helper Functions

The `countries.js` file includes utility functions for:
- Filtering by region/continent
- Searching countries
- Sorting by various criteria (population, area, GDP)
- Formatting numbers for display
