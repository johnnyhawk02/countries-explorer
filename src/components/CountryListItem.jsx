import React from 'react';
import { formatPopulation, formatGDP } from '../data/helpers';

const CountryListItem = ({ country, onClick }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-gray-50"
      onClick={() => onClick(country)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          {/* Flag and Basic Info */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{country.flag}</span>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{country.name}</h3>
              <p className="text-sm text-gray-600">{country.capital}</p>
            </div>
          </div>
          
          {/* Region Badge */}
          <div className="hidden sm:block">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {country.region}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="text-right hidden md:block">
            <p className="font-medium text-gray-900">{formatPopulation(country.population)}</p>
            <p>Population</p>
          </div>
          <div className="text-right hidden lg:block">
            <p className="font-medium text-gray-900">{country.area.toLocaleString()} km²</p>
            <p>Area</p>
          </div>
          <div className="text-right hidden xl:block">
            <p className="font-medium text-gray-900">{formatGDP(country.gdp)}</p>
            <p>GDP</p>
          </div>
        </div>
      </div>

      {/* Mobile-only stats */}
      <div className="mt-3 flex space-x-4 text-sm text-gray-600 md:hidden">
        <div>
          <span className="font-medium text-gray-900">{formatPopulation(country.population)}</span>
          <span className="ml-1">people</span>
        </div>
        <div>
          <span className="font-medium text-gray-900">{country.area.toLocaleString()}</span>
          <span className="ml-1">km²</span>
        </div>
      </div>
    </div>
  );
};

export default CountryListItem;
