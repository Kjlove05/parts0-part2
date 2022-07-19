import personService from '../api/persons'
const initState = {
   persons:[
    {id: '1',name:'kyle',number:'09555555'},
    {id:'2',name:'arjie',number:'09145232'},
    {id:'3',name:'weng',number:'09123456'},
    {id:'4',name:'jhun',number:'09356985'},

  ]
  }

const rootReducer =(state=initState,action)=> {
  console.log(state.persons)
  switch(action.type){
    case "DELETE_PERSON":
      const  id  = action.payload;
      let newPersons =state.persons.filter(person=> person.id !== id);
      console.log(newPersons)
       return {...state, persons: newPersons }

    case "ADD_PERSON":
      const {name,number} = action.payload;
           
           const newPerson= {
            name:name,
            number:number,
            id:state.persons.length+1,
           } 
           console.log(newPerson)
            return {...state, persons: state.persons.concat(newPerson) }     
    case "UPDATE_PERSON":
      const editPerson = state.persons.find(person=> person.name === action.payload.name)
      console.log(editPerson)
      editPerson.name=action.payload.name
      editPerson.number=action.payload.number
     return{...state}
    default:
        return state
}}
export default rootReducer
// export const addPerson = (event) => {
//     event.preventDefault()
//     const personObject = {
//       name: this.state.newName,
//       number: this.state.newNumber,
//       id: this.state.persons.length + 1,
//     }
    
//     const existingPerson = this.state.persons.find(
//       (person) => person.name.toLowerCase() === this.state.newName.toLowerCase())
      
//       if (existingPerson && existingPerson.number === this.state.newNumber) {
//         alert(`${this.state.newName} is already added to phonebook`)
//         this.setState({newName:""})
//         this.setState({newNumber:""})
//         return
//       }
    
//     if (existingPerson && existingPerson.number !== this.state.newNumber){
//        if (
//           window.confirm(
//             `${this.state.newName} is already added to phonebook, replace the old number with a new one?`
//           )
//         ) {
//           const changedPerson = { ...existingPerson, number: this.state.newNumber }
//           const id = existingPerson.id
  
//           personService
//             .update(id, changedPerson)
//             .then((returnedPerson) => {
//               this.setState({persons:(
//                 this.state.persons.map((person) => (person.id !== id ? person : returnedPerson))
//               )})
              
//             })
//             .catch((error) => {
//               if(error.response.data){
//                 this.setState({errorMessage:(error.response.data.error)})
//                 setTimeout(() => {
//                 this.setState({errorMessage:null})
//                 }, 5000)
//               }})}}

    
//     else {
//   personService
//     .create(personObject)
//     .then(returnedPerson => {
//       this.setState({persons:(this.state.persons.concat(returnedPerson))})
//       this.setState({newName:""})
//       this.setState({errorMessage:([`Added ${personObject.name}`,{color:'green'}])
//     })
//     setTimeout(() => {
//       this.setState({errorMessage:null})
//     }, 5000)
    
//   })
//     .catch(error => {
//       this.setState({errorMessage:([`${error.response.data.error}`, {color: 'red'}])})
     
//       setTimeout(() => {
//         this.setState({errorMessage:null})
//       }, 5000)
//       console.log(error.response.data)
//     })}
    
//     this.setState({newName:""})
//     this.setState({newNumber:""})
//     console.log(this.state.persons)
//   }
//   export const handleDelete = (id) => {
//     if (window.confirm("Do you really want to delete this person")) {
//       personService
//         .remove(id)
//         .then(() => {
//           this.setState({persons:(this.state.persons.filter((person) => person.id !== id))})
//         })
//        .catch((error) => alert(error))
//        this.setState({errorMessage:([`Information of ${id} has been already remove from the server`,{color:'red'}])})
//        setTimeout(() => {
//         this.setState({errorMessage:null})
//       }, 5000)

//     } else {
//       return ""
//     }       
  


