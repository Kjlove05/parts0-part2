import React, {Component} from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from './persons'
import Notification from './Notification'
import PersonList from './PersonList'


class App extends Component {
  state = {
    persons: [
      {name: '', number:''},
    ],
    newName: "",
    newNumber:"",
    filter:"",
    errorMessage:null
   
  }
 
 componentDidMount(){
    personService
    .getAll()
    .then(initialPersons => {
      this.setState({persons: (initialPersons)})
    })

  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.persons.length + 1,
    }
    
    const existingPerson = this.state.persons.find(
      (person) => person.name.toLowerCase() === this.state.newName.toLowerCase())
      
      if (existingPerson && existingPerson.number === this.state.newNumber) {
        alert(`${this.state.newName} is already added to phonebook`)
        this.setState({newName:""})
        this.setState({newNumber:""})
        return
      }
    
    if (existingPerson && existingPerson.number !== this.state.newNumber){
       if (
          window.confirm(
            `${this.state.newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const changedPerson = { ...existingPerson, number: this.state.newNumber }
          const id = existingPerson.id
  
          personService
            .update(id, changedPerson)
            .then((returnedPerson) => {
              this.setState({persons:(
                this.state.persons.map((person) => (person.id !== id ? person : returnedPerson))
              )})
              
            })
            .catch((error) => {
              if(error.response.data){
                this.setState({errorMessage:(error.response.data.error)})
                setTimeout(() => {
                this.setState({errorMessage:null})
                }, 5000)
              }})}}

    
    else {
  personService
    .create(personObject)
    .then(returnedPerson => {
      this.setState({persons:(this.state.persons.concat(returnedPerson))})
      this.setState({newName:""})
      this.setState({errorMessage:([`Added ${personObject.name}`,{color:'green'}])
    })
    setTimeout(() => {
      this.setState({errorMessage:null})
    }, 5000)
    
  })
    .catch(error => {
      this.setState({errorMessage:([`${error.response.data.error}`, {color: 'red'}])})
     
      setTimeout(() => {
        this.setState({errorMessage:null})
      }, 5000)
      console.log(error.response.data)
    })}
    
    this.setState({newName:""})
    this.setState({newNumber:""})
    console.log(this.state.persons)
  }
  



 handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person")) {
      personService
        .remove(id)
        .then(() => {
          this.setState({persons:(this.state.persons.filter((person) => person.id !== id))})
        })
       .catch((error) => alert(error))
       this.setState({errorMessage:([`Information of ${id} has been already remove from the server`,{color:'red'}])})
       setTimeout(() => {
        this.setState({errorMessage:null})
      }, 5000)

    } else {
      return ""
    }       
  }
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({newName:event.target.value})
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({newNumber:event.target.value})
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({filter:event.target.value})
  }

  render(){
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={this.state.errorMessage} />
      <Filter filter ={this.state.filter} handleFilterChange={this.handleFilterChange}/>
      <form onSubmit={this.addPerson}>
      
      <h3>Add a new</h3>
      <PersonForm newName={this.state.newName} handleNameChange={this.handleNameChange} newNumber={this.state.newNumber} handleNumberChange={this.handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <PersonList  persons={this.state.persons} handleDelete={this.handleDelete} filter={this.state.filter}/>
    </div>
  )
      
      }}
   
export default App 

// const App = () => {
//   const [persons, setPersons] = useState([''])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [filter,setFilter] = useState('')
//   const [errorMessage, setErrorMessage] = useState(null)
 


//   useEffect(() => {
//     personService
//     .getAll()
//     .then(initialPersons => {
//       setPersons(initialPersons)
//     })
// }, [])
//   console.log('render', persons.length, 'person')


//   const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       number: newNumber,
//       id: persons.length + 1,
//     }
    
//     const existingPerson = persons.find(
//       (person) => person.name.toLowerCase() === newName.toLowerCase())
      
//       if (existingPerson && existingPerson.number === newNumber) {
//         alert(`${newName} is already added to phonebook`)
//         setNewName("")
//         setNewNumber("")
//         return
//       }
    
//     if (existingPerson && existingPerson.number !== newNumber){
//        if (
//           window.confirm(
//             `${newName} is already added to phonebook, replace the old number with a new one?`
//           )
//         ) {
//           const changedPerson = { ...existingPerson, number: newNumber }
//           const id = existingPerson.id
  
//           personService
//             .update(id, changedPerson)
//             .then((returnedPerson) => {
//               setPersons(
//                 persons.map((person) => (person.id !== id ? person : returnedPerson))
//               )
              
//             })
//             .catch((error) => {
//               if(error.response.data){
//                 setErrorMessage(error.response.data.error)
//                 setTimeout(() => {
//                   setErrorMessage(null)
//                 }, 5000)
//               }})}}

    
//     else {
//   personService
//     .create(personObject)
//     .then(returnedPerson => {
//       setPersons(persons.concat(returnedPerson))
//       setNewName('')
//       setErrorMessage([`Added ${personObject.name}`,{color:'green'}])
//     })
//     .catch(error => {
//       setErrorMessage([`${error.response.data.error}`, {color: 'red'}])
//       // this is the way to access the error message
//       setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)
//       console.log(error.response.data)
//     })
//     }
//     setNewName('')
//     setNewNumber('')
//   console.log(persons)
// }
  
// const filtered = !filter
//   ? persons
//   : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


//  const handleDelete = (id) => {
//     if (window.confirm("Do you really want to delete this person")) {
//       personService
//         .remove(id)
//         .then(() => {
//           setPersons(persons.filter((person) => person.id !== id))
//         })
//        .catch((error) => alert(error))
//        setErrorMessage([`Information of ${id} has been already remove from the server`,{color:'red'}])
//        setTimeout(() => {
//         setErrorMessage(null)
//       }, 5000)

//     } else {
//       return ""
//     }       
//   }
//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     console.log(event.target.value)
//     setNewNumber(event.target.value)
//   }

//   const handleFilterChange = (event) => {
//     console.log(event.target.value)
//     setFilter(event.target.value)
//   }


//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Notification message={errorMessage} />
//       <Filter filter ={filter} handleFilterChange={handleFilterChange}/>
//       <form onSubmit={addPerson}>
      
//       <h3>Add a new</h3>
//       <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       {filtered.map(person => 
//             <Person 
//             key={person.id} 
//             person={person} 
//             handleDelete={handleDelete}/>
            
//           )}
//     </div>
//   )
      
//       }
   
// export default App 