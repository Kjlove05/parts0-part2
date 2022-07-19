import React, {Component} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './api/persons'
import Notification from './components/Notification'
import PersonList from './components/PersonList'
import {connect} from 'react-redux'
import {deletePerson,addPerson,updatePerson} from './actions/action'


class App extends Component {
  state = {
    persons:{id:'',name:'',number:''},
  
    newName: "",
    newNumber:"",
    filter:"",
    errorMessage:null
   
  }
  
  handleNameChange = (e) => {
    this.setState({
      newName:e.target.value
    })
  }

  handleNumberChange = (e) => {
    this.setState({
      newNumber:e.target.value
    })
  }

  handleFilterChange = (e) => {
    this.setState({
      filter:e.target.value
    })
  }
  handleDelete = (id) => {
        if (window.confirm("Do you really want to delete this person")) {
         this.props.deletePerson(id)
            }
     
          }
      
handleAdd= (name,number) =>{
const{persons} =this.props
  const existingPerson = persons.find(
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
             
        this.props.updatePerson(name,number);
        this.setState({
            newName:'',
            newNumber:''
        })
      }
    }
        else {
     
          this.props.addPerson(name,number)
          this.setState({
            newName:"",
            newNumber:""
          })
          this.setState({errorMessage:([`Added ${name}`,{color:'green'}])
        })
     
      
        
        
      }
      
        
    
  }
 

  
  render(){
    const{persons} =this.props
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={this.state.errorMessage} />
      <Filter filter ={this.state.filter} handleFilterChange={this.handleFilterChange}/>
      
      <h3>Add a new</h3>
      <PersonForm newName={this.state.newName} handleNameChange={this.handleNameChange} newNumber={this.state.newNumber} handleNumberChange={this.handleNumberChange}/>
        <div>
        <button  onClick={()=>{
          // console.log(this.state.newName,this.state.newNumber)
          this.handleAdd(this.state.newName,this.state.newNumber)} } >
                       Add
                </button>
        </div>
      
      <h2>Numbers</h2>
     <PersonList  persons={persons} handleDelete={this.handleDelete} filter={this.state.filter}/>
    </div>
  )
      
      }}
      const mapStateToProps = (state) => {
        return{
            persons:state.persons,
        
    }
    

}
const mapDispatchToProps = (dispatch) => {
  return {
      deletePerson: (id)=> {dispatch(deletePerson(id))},
      addPerson: (name,number) =>{dispatch(addPerson(name,number))},
      updatePerson: (name,number) =>{dispatch(updatePerson(name,number))}

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App) 

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