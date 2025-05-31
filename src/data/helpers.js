// Helper functions for formatting and data manipulation

// Format population with commas
export const formatPopulation = (population) => {
  return population.toLocaleString();
};

// Format area with commas
export const formatArea = (area) => {
  return `${area.toLocaleString()} km²`;
};

// Format GDP in billions or trillions
export const formatGDP = (gdp) => {
  if (gdp >= 1000000000000) {
    return `$${(gdp / 1000000000000).toFixed(1)} trillion`;
  } else if (gdp >= 1000000000) {
    return `$${(gdp / 1000000000).toFixed(0)} billion`;
  } else {
    return `$${gdp.toLocaleString()}`;
  }
};

// Get population density
export const getPopulationDensity = (population, area) => {
  return Math.round(population / area);
};

// Sort countries by various criteria
export const sortCountries = (countries, sortBy = 'name') => {
  return [...countries].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'population':
        return b.population - a.population;
      case 'area':
        return b.area - a.area;
      case 'gdp':
        return b.gdp - a.gdp;
      default:
        return a.name.localeCompare(b.name);
    }
  });
};

// Get countries by region
export const getCountriesByRegion = (countries, region) => {
  return countries.filter(country => country.region === region);
};

// Get largest countries by area
export const getLargestCountries = (countries, limit = 10) => {
  return sortCountries(countries, 'area').slice(0, limit);
};

// Get most populous countries
export const getMostPopulousCountries = (countries, limit = 10) => {
  return sortCountries(countries, 'population').slice(0, limit);
};

// Get countries by language
export const getCountriesByLanguage = (countries, language) => {
  return countries.filter(country => 
    country.languages.some(lang => 
      lang.toLowerCase().includes(language.toLowerCase())
    )
  );
};
