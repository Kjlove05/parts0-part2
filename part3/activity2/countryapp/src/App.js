import { useState, useEffect } from 'react'
import Filter from './Filter'
import axios from 'axios'
// import Country from './Country'
import CountryList from './CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter,setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'country')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  
  return (
    <div>
    
      <Filter filter ={newFilter} handleFilterChange={handleFilterChange}/>
      <p>
      <CountryList
        countries={countries}
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      /></p>

      
      
    </div>
      )
    
    }
export default App 