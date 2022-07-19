import React from 'react'
import Person from './Person'

const PersonList =({persons,handleDelete,filter}) => {

  
  const filtered = !filter
  ? persons
  : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  const filteredList = filtered.map(person => {
    return(
    <Person key={person.id} person={person} handleDelete={handleDelete}/>
    
  )})


        return(
            <div key={persons.id}>
                {filteredList}
            </div>
        )

        }
        
     
export default PersonList
  


