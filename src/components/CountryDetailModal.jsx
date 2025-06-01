import React from 'react';
import { formatPopulation, formatGDP } from '../data/helpers';

const CountryDetailModal = ({ country, isOpen, onClose }) => {
  if (!isOpen || !country) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{country.name}</h2>
              <p className="text-gray-600">{country.capital}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          {country.description && (
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{country.description}</p>
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Basic Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Region:</span>
                  <span className="font-medium">{country.region}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Capital:</span>
                  <span className="font-medium">{country.capital}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Population:</span>
                  <span className="font-medium">{formatPopulation(country.population)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Area:</span>
                  <span className="font-medium">{country.area.toLocaleString()} km²</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">GDP:</span>
                  <span className="font-medium">{formatGDP(country.gdp)}</span>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Additional Details
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Government:</span>
                  <span className="font-medium">{country.government}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Currency:</span>
                  <span className="font-medium">{country.currency}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium">{country.timezone}</span>
                </div>
                
                {country.nationalDish && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">National Dish:</span>
                    <span className="font-medium">{country.nationalDish}</span>
                  </div>
                )}
                
                {country.topAttraction && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top Attraction:</span>
                    <span className="font-medium">{country.topAttraction}</span>
                  </div>
                )}
                
                <div>
                  <span className="text-gray-600">Languages:</span>
                  <div className="mt-1">
                    {country.languages.map((language, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded mr-2 mb-1"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculated Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Calculated Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Population Density</p>
                <p className="text-xl font-bold text-blue-900">
                  {Math.round(country.population / country.area).toLocaleString()} people/km²
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-medium">GDP per Capita</p>
                <p className="text-xl font-bold text-green-900">
                  ${Math.round(country.gdp / country.population).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailModal;
