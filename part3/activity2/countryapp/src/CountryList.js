import React from 'react'
import Country from './Country'

const CountryList = ({ countries, newFilter,handleFilterChange}) => {
    let filteredList = countries.filter(country =>
      country.name.common.toLowerCase().includes(newFilter.toLowerCase())
    );
    let listLength = filteredList.length;
    console.log(filteredList);
  
    if (newFilter.length === 0 || listLength === 0) {
      return <div />;
    }
  
    if (listLength >= 10) {
      return <div>Too many matches, specify another filter</div>;
      
    }
  
    if (listLength > 1) {
      return filteredList.map(country => (
        <div>
          {country.name.common}
          <button value={country.name.common} onClick={handleFilterChange} > show </button>
        </div>
      ));
    } else {
      return (
        <div>
           
      <Country country={filteredList[0]} /> 
        </div>
      );
    }
  };
 export default CountryList