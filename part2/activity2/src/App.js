import { useState, useEffect } from 'react'
import Person from './Person'
import Filter from './Filter'
// import axios from 'axios'
import PersonForm from './PersonForm'
import personService from './persons'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([''])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
 


  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
}, [])
  console.log('render', persons.length, 'person')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase())
      
      if (existingPerson && existingPerson.number === newNumber) {
        alert(`${newName} is already added to phonebook`)
        setNewName("")
        setNewNumber("")
        return
      }
    
    if (existingPerson && existingPerson.number !== newNumber){
       if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const changedPerson = { ...existingPerson, number: newNumber }
          const id = existingPerson.id
  
          personService
            .update(id, changedPerson)
            .then((returnedPerson) => {
              setPersons(
                persons.map((person) => (person.id !== id ? person : returnedPerson))
              )
              
            })
            .catch((error) => {
              if (error.response.data) {
                setErrorMessage(error.response.data.error)
                setTimeout(() => {
                  setErrorMessage(null)
                }, 5000)
              }})}}

    
    else {
      personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setErrorMessage(`Added ${personObject.name}`)
    })
     
    }
    setNewName('')
    setNewNumber('')
    
  console.log(persons)
}
  
const filtered = !filter
  ? persons
  : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


 const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person")) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
       .catch((error) => alert(error))
       setErrorMessage([`Information of ${id} has been already remove from the server`],{color:'red'})
    } else {
      return ""
    }       
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter ={filter} handleFilterChange={handleFilterChange}/>
      <form onSubmit={addPerson}>
      
      <h3>Add a new</h3>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map(person => 
            <Person 
            key={person.id} 
            person={person} 
            handleDelete={handleDelete}/>
            
          )}
    </div>
  )
      
      }
   
export default App 