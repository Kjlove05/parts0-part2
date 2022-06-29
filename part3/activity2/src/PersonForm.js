import React from 'react'

const PersonForm = ({newName,handleNameChange,newNumber,handleNumberChange}) => {
    return(
        <div>
        <p>name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </p>
        <p>number: <input 
        value={newNumber}
        onChange={handleNumberChange}
        />
        </p>
        </div>
    )
}

export default PersonForm