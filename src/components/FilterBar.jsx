import React, { useState } from 'react';

const FilterBar = ({ onFilter, selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const regions = [
    { value: 'all', label: 'All Regions', icon: '🌍' },
    { value: 'africa', label: 'Africa', icon: '🌍' },
    { value: 'asia', label: 'Asia', icon: '🌏' },
    { value: 'europe', label: 'Europe', icon: '🌍' },
    { value: 'north america', label: 'North America', icon: '🌎' },
    { value: 'south america', label: 'South America', icon: '🌎' },
    { value: 'oceania', label: 'Oceania', icon: '🌏' }
  ];

  const currentRegion = regions.find(region => region.value === selectedRegion) || regions[0];

  const handleRegionSelect = (regionValue) => {
    onFilter(regionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 min-w-40"
      >
        <span className="text-lg">{currentRegion.icon}</span>
        <span className="text-sm font-medium text-gray-700">Region</span>
        <span className="text-sm text-gray-600 hidden sm:inline">{currentRegion.label}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-150 ml-auto ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute left-0 z-20 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="py-1">
              {regions.map((region) => (
                <button
                  key={region.value}
                  onClick={() => handleRegionSelect(region.value)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                    selectedRegion === region.value
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-base">{region.icon}</span>
                    <span>{region.label}</span>
                    {selectedRegion === region.value && (
                      <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterBar;
