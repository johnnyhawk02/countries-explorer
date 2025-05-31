// Import all countries from each continent
import * as northAmerica from './north-america';
import * as southAmerica from './south-america';
import * as europe from './europe';
import * as asia from './asia';
import * as africa from './africa';
import * as oceania from './oceania';

// Aggregate all countries into a single array
export const countries = [
  // North America
  northAmerica.unitedStates,
  northAmerica.canada,
  northAmerica.mexico,
  northAmerica.costaRica,
  northAmerica.jamaica,
  northAmerica.panama,
  northAmerica.cuba,
  northAmerica.dominicanRepublic,
  northAmerica.guatemala,
  northAmerica.honduras,
  northAmerica.nicaragua,
  northAmerica.haiti,
  northAmerica.belize,
  northAmerica.elSalvador,
  northAmerica.bahamas,
  northAmerica.barbados,
  northAmerica.trinidadAndTobago,
  northAmerica.antiguaAndBarbuda,
  northAmerica.dominica,
  northAmerica.saintKittsAndNevis,
  northAmerica.saintVincentAndTheGrenadines,
  
  // South America
  southAmerica.brazil,
  southAmerica.argentina,
  southAmerica.chile,
  southAmerica.colombia,
  southAmerica.peru,
  southAmerica.venezuela,
  southAmerica.ecuador,
  southAmerica.uruguay,
  southAmerica.bolivia,
  southAmerica.paraguay,
  southAmerica.guyana,
  southAmerica.suriname,
  southAmerica.frenchGuiana,
  
  // Europe
  europe.germany,
  europe.france,
  europe.unitedKingdom,
  europe.italy,
  europe.spain,
  europe.russia,
  europe.portugal,
  europe.netherlands,
  europe.sweden,
  europe.greece,
  europe.switzerland,
  europe.ireland,
  europe.norway,
  europe.austria,
  europe.poland,
  europe.finland,
  europe.belgium,
  europe.denmark,
  europe.czech,
  europe.hungary,
  europe.croatia,
  europe.ukraine,
  europe.romania,
  europe.slovakia,
  europe.slovenia,
  europe.serbia,
  europe.estonia,
  europe.latvia,
  europe.lithuania,
  europe.bulgaria,
  europe.belarus,
  europe.moldova,
  europe.northMacedonia,
  europe.albania,
  europe.andorra,
  europe.bosnia,
  europe.iceland,
  europe.liechtenstein,
  europe.luxembourg,
  europe.malta,
  europe.monaco,
  europe.montenegro,
  europe.armenia,
  europe.azerbaijan,
  europe.georgia,
  europe.sanMarino,
  europe.vaticanCity,
  
  // Asia
  asia.china,
  asia.japan,
  asia.india,
  asia.southKorea,
  asia.thailand,
  asia.indonesia,
  asia.vietnam,
  asia.singapore,
  asia.malaysia,
  asia.philippines,
  asia.bangladesh,
  asia.saudiArabia,
  asia.pakistan,
  asia.turkey,
  asia.taiwan,
  asia.israel,
  asia.uae,
  asia.qatar,
  asia.kazakhstan,
  asia.uzbekistan,
  asia.myanmar,
  asia.sriLanka,
  asia.iran,
  asia.iraq,
  asia.jordan,
  asia.nepal,
  asia.lebanon,
  asia.afghanistan,
  asia.cambodia,
  asia.laos,
  asia.mongolia,
  asia.northKorea,
  asia.bahrain,
  asia.bhutan,
  asia.brunei,
  asia.cyprus,
  asia.eastTimor,
  asia.kuwait,
  asia.kyrgyzstan,
  asia.maldives,
  asia.oman,
  asia.palestine,
  asia.syria,
  asia.tajikistan,
  asia.turkmenistan,
  asia.yemen,
  
  // Africa
  africa.nigeria,
  africa.southAfrica,
  africa.egypt,
  africa.kenya,
  africa.algeria,
  africa.morocco,
  africa.ghana,
  africa.ethiopia,
  africa.tanzania,
  africa.cameroon,
  africa.senegal,
  africa.uganda,
  africa.tunisia,
  africa.madagascar,
  africa.ivory,
  africa.libya,
  africa.zambia,
  africa.zimbabwe,
  africa.botswana,
  africa.namibia,
  africa.rwanda,
  africa.angola,
  africa.congo,
  africa.mozambique,
  africa.mali,
  africa.sudan,
  africa.southSudan,
  africa.burkina,
  africa.guinea,
  africa.niger,
  africa.chad,
  africa.benin,
  africa.burundi,
  africa.caboVerde,
  africa.centralAfricanRepublic,
  africa.comoros,
  africa.djibouti,
  africa.equatorialGuinea,
  africa.eritrea,
  africa.gabon,
  africa.gambia,
  africa.congoRepublic,
  africa.eswatini,
  africa.guineaBissau,
  africa.lesotho,
  africa.liberia,
  africa.malawi,
  africa.mauritania,
  africa.mauritius,
  africa.saoTomeAndPrincipe,
  africa.seychelles,
  africa.sierraLeone,
  africa.somalia,
  africa.togo,
  
  // Oceania
  oceania.australia,
  oceania.newZealand,
  oceania.fiji,
  oceania.papuaNewGuinea,
  oceania.solomonIslands,
  oceania.samoa,
  oceania.vanuatu,
  oceania.kiribati,
  oceania.tonga,
  oceania.palau,
  oceania.marshallIslands,
  oceania.micronesia,
  oceania.nauru,
  oceania.tuvalu
];

// Helper function to get all regions
export const getRegions = () => {
  const regions = new Set(countries.map(country => country.region));
  return Array.from(regions).sort();
};

// Helper function to search countries
export const searchCountries = (searchTerm, selectedRegion = '') => {
  return countries.filter(country => {
    const matchesSearch = searchTerm === '' || 
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRegion = selectedRegion === '' || 
      country.region.toLowerCase() === selectedRegion.toLowerCase();
    
    return matchesSearch && matchesRegion;
  });
};

// Helper function to get country by ID
export const getCountryById = (id) => {
  return countries.find(country => country.id === id);
};
