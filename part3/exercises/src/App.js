import { useState } from 'react'
import Note from './Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true) 

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const namesToShow = showAll
  ? persons
  : persons.filter(person => person.important)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
    </div>
  )
}

export default App 