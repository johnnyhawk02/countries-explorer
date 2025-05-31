const FilterBar = ({ onFilter, selectedRegion }) => {
  const regions = [
    { value: 'all', label: 'All Regions', icon: '🌍' },
    { value: 'africa', label: 'Africa', icon: '🌍' },
    { value: 'asia', label: 'Asia', icon: '🌏' },
    { value: 'europe', label: 'Europe', icon: '🌍' },
    { value: 'north america', label: 'North America', icon: '🌎' },
    { value: 'south america', label: 'South America', icon: '🌎' },
    { value: 'oceania', label: 'Oceania', icon: '🌏' }
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {regions.map((region) => (
        <button
          key={region.value}
          onClick={() => onFilter(region.value)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200
            ${selectedRegion === region.value
              ? 'bg-blue-500 text-white border-blue-500 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }
          `}
        >
          <span className="text-sm">{region.icon}</span>
          <span className="text-sm font-medium">{region.label}</span>
        </button>
      ))}
    </div>
  )
}

export default FilterBar
