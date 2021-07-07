
import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import types from './contacts/contacts-types';
import contactsReducer from './contacts/contacts-reduser';




// const rootReducer = combineReducer({
//     contacts: {
//         items: [],
//         filter: ''
//       }

//       // switch(action.type){
//       //   case 's':
//       //     return
//       // }
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;


// import {createStore} from 'redux';

// const initialState ={
//             items: [],
//             filter: ''
// }



// const contactsReducer = (state = initialState, {type, playload}) =>{
//   switch (type){
//     case submit:
//       return {
//         items:[  state.items.map(item => item.name).includes(playload.name)
//           ? alert(`${playload.name} is already in contacts.`):
//           playload, ...state.items],
//       };


//     default:
//       return state;
//   }
// }


const rootReducer = combineReducers({
  contacts: contactsReducer,
})


const store = createStore(rootReducer, composeWithDevTools());
export default store;