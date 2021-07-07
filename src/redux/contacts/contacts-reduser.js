import { createStore, combineReducers } from 'redux';
import types from './contacts-types';




const items = (state = [], {type, payload}) =>{
    switch (type){
      case types.SUBMIT:
        // return [payload, ...state];
        return state.map(contact => contact.name).includes(payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state];
 
        


    case types.DELETE:
        return state.filter(
            ({id}) => id !== payload
          );



  
      default:
        return state;
    }
  }


  const filter = (state = '', {type, payload}) =>{
    switch (type){
    case types.FILTER:
        return payload;


  
      default:
        return state;
    }
    }

    // switch (action){
    //   case submit:
    //     return {
    //       items:[  state.items.map(item => item.name).includes(playload.name)
    //         ? alert(`${playload.name} is already in contacts.`):
    //         playload, ...state.items],
    //     };
  
  
    //   default:
    //     return state;
    // }


  export default combineReducers({
      items,
      filter
  })