import {ADD_PERSON, DELETE_PERSON, UPDATE_PERSON} from '../constants/ActionTypes'

export const addPerson = (name,number) => {
    return {
        type: ADD_PERSON,
        payload: {
            name:name,
            number:number,
          
        }
    }
}

export const deletePerson = (id) => {
    return{
        type: DELETE_PERSON,
        payload:id
    }
}

export const updatePerson = (name,number) => {
    return {
        type:UPDATE_PERSON,
        payload:{
            name:name,
            number:number
        }
    }
}


