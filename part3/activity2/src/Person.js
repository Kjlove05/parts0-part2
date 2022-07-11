import React from 'react'

const Person = ({person,handleDelete}) => {
    return(
        <div key ={person.id}>{person.name} {person.number} 
        <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
    )
}

export default Person