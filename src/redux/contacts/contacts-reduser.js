import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './contacts-actions';


const items = createReducer([], {
    [actions.submit]: (state, { payload }) => state.map(contact => contact.name).includes(payload.name)
    ? alert(`${payload.name} is already in contacts.`)
    : [payload, ...state],
    [actions.deleteContacts]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
    // case types.SUBMIT:
    //   // return [payload, ...state];
    //   return state.map((contact) => contact.name).includes(payload.name)
    //     ? alert(`${payload.name} is already in contacts.`)
    //     : [payload, ...state];

        

    // case types.DELETE:
    //   return state.filter(({ id }) => id !== payload);



//     case types.MOUNT:
//       return  JSON.parse(localStorage.getItem("contacts")) && [
//            JSON.parse(localStorage.getItem("contacts"))]

      

//     case types.UPDATE:
//       return state.contacts !== payload.contacts && [
//           localStorage.setItem("contacts", JSON.stringify(state.contacts)),
//         ]
    

//     default:
//       return state;
//   }
// };


const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
})

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
