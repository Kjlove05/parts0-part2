import React from 'react'

const Country = ({country}) => {
    console.log(country)
    return(
        <div>   
            <h2>Country: {country.name.common}</h2>
            <p>capital: {country.capital}<br></br>
            area: {country.area} <br></br>
            population: {country.population}</p>
            <h4>languages: </h4>
            {Object.keys(country.languages).map((language, i) => 
            <li key={i}>{country.languages[language]}</li>)} 
            <img src = {country.flags.png}
                 alt="" />

            {/* <p> <Weather capital={country.capital} /></p> */}
        </div>
    )
}

export default Country