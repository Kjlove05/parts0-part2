import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = () => {
    const [weather, setweather] = useState()
    const [location,setLocation] = useState()

    useEffect(() => {
        console.log('effect')
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
      }, [])



}
export default Weather