import { useState } from 'react'
import { countries, searchCountries, getRegions } from './data/countries/index'
import { formatPopulation, formatArea, formatGDP, getCountriesByRegion, sortCountries } from './data/helpers'
import CountryCard from './components/CountryCard'
import CountryListItem from './components/CountryListItem'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import ViewToggle from './components/ViewToggle'
import SortDropdown from './components/SortDropdown'

function App() {
  const [displayedCountries, setDisplayedCountries] = useState(countries)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [currentView, setCurrentView] = useState('grid')
  const [currentSort, setCurrentSort] = useState('name-asc')

  // Helper function to apply current filters and sorting
  const updateDisplayedCountries = (searchTerm, selectedRegion, sortBy) => {
    let filteredCountries = countries;

    // Apply search filter
    if (searchTerm !== '') {
      filteredCountries = searchCountries(searchTerm);
    }

    // Apply region filter
    if (selectedRegion !== 'all') {
      filteredCountries = filteredCountries.filter(country => 
        country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }

    // Apply sorting
    const sortedCountries = sortCountries(filteredCountries, sortBy);
    setDisplayedCountries(sortedCountries);
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    updateDisplayedCountries(term, selectedRegion, currentSort)
  }

  const handleFilterByRegion = (region) => {
    setSelectedRegion(region)
    updateDisplayedCountries(searchTerm, region, currentSort)
  }

  const handleSortChange = (sortBy) => {
    setCurrentSort(sortBy)
    updateDisplayedCountries(searchTerm, selectedRegion, sortBy)
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

      {/* Search, Filter, and Controls Section - Sticky */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <SearchBar onSearch={handleSearch} />
              <FilterBar onFilter={handleFilterByRegion} selectedRegion={selectedRegion} />
            </div>
            <div className="flex items-center gap-3">
              <SortDropdown currentSort={currentSort} onSortChange={handleSortChange} />
              <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {displayedCountries.length} of {countries.length} countries
          </p>
        </div>

        {/* Countries Display */}
        {currentView === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedCountries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {displayedCountries.map((country) => (
              <CountryListItem key={country.id} country={country} />
            ))}
          </div>
        )}

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
