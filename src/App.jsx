import { useState } from 'react'
import { countries, searchCountries, getRegions } from './data/countries/index'
import { formatPopulation, formatArea, formatGDP, getCountriesByRegion } from './data/helpers'
import CountryCard from './components/CountryCard'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'

function App() {
  const [displayedCountries, setDisplayedCountries] = useState(countries)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term === '') {
      if (selectedRegion === 'all') {
        setDisplayedCountries(countries)
      } else {
        setDisplayedCountries(getCountriesByRegion(countries, selectedRegion))
      }
    } else {
      const searchResults = searchCountries(term)
      if (selectedRegion !== 'all') {
        setDisplayedCountries(searchResults.filter(country => 
          country.region.toLowerCase() === selectedRegion.toLowerCase()
        ))
      } else {
        setDisplayedCountries(searchResults)
      }
    }
  }

  const handleFilterByRegion = (region) => {
    setSelectedRegion(region)
    if (region === 'all') {
      if (searchTerm === '') {
        setDisplayedCountries(countries)
      } else {
        setDisplayedCountries(searchCountries(searchTerm))
      }
    } else {
      // Convert first letter of each word to uppercase for proper region format
      const formattedRegion = region
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      if (searchTerm === '') {
        setDisplayedCountries(countries.filter(country => 
          country.region.toLowerCase() === region.toLowerCase()
        ))
      } else {
        const searchResults = searchCountries(searchTerm)
        setDisplayedCountries(searchResults.filter(country => 
          country.region.toLowerCase() === region.toLowerCase()
        ))
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">🌍 Countries of the World</h1>
          <p className="mt-2 text-gray-600">Explore information about countries around the globe</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar onSearch={handleSearch} />
          <FilterBar onFilter={handleFilterByRegion} selectedRegion={selectedRegion} />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {displayedCountries.length} of {countries.length} countries
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>

        {/* No Results */}
        {displayedCountries.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No countries found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
