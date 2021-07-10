
import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import contactsReducer from './contacts/contacts-reduser';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleware =[...getDefaultMiddleware(), logger]



// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// })

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV=== 'development',
});

// const store = createStore(rootReducer, composeWithDevTools());
export default store;