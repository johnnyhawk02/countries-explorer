import { formatPopulation, formatArea, formatGDP } from '../data/helpers'

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Country Flag and Name */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-4xl">{country.flag}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {country.region}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{country.name}</h3>
        <p className="text-gray-600 flex items-center">
          <span className="mr-1">📍</span>
          {country.capital}
        </p>
      </div>

      {/* Country Stats */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Population</div>
            <div className="font-semibold text-gray-900">{formatPopulation(country.population)}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Area</div>
            <div className="font-semibold text-gray-900">{formatArea(country.area)}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">GDP</div>
            <div className="font-semibold text-gray-900">{formatGDP(country.gdp)}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Currency</div>
            <div className="font-semibold text-gray-900 text-xs">{country.currency}</div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-2">Languages</div>
          <div className="flex flex-wrap gap-1">
            {country.languages.map((language, index) => (
              <span 
                key={index}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Government */}
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">Government</div>
          <div className="text-sm text-gray-700">{country.government}</div>
        </div>

        {/* Description */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      {/* Additional Info Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>🕐 {country.timeZone}</span>
          <span>{country.continent}</span>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
