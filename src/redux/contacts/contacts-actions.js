import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

const submit = createAction('contacts/submit');

// const submit = contact =>({
//     type: types.SUBMIT,
//     payload:contact,
// })

const changeFilter = createAction('contacts/filter');

// const changeFilter = evt =>({
//     type: types.FILTER,
//     payload: evt.currentTarget.value,
// })

const deleteContacts = createAction('contacts/delete');

// const deleteContacts = contactId =>({
//     type: types.DELETE,
//     payload: contactId,
// })

// const contactsDidMount = () =>({
//     type: types.MOUNT,
// })


// const contactsDidMount = () =>({
//     type: 'contacts/mount',

// })
const contactsDidMount = () =>({
    type: 'contacts/mount',
    payload: "contacts",

})

const contactsUpdate = (prevState) =>({
    type: 'comtacts/update',
    payload: prevState,

})

export default {submit, changeFilter, deleteContacts, contactsDidMount, contactsUpdate};