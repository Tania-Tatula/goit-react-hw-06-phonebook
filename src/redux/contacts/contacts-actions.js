import types from './contacts-types';


const submit = contact =>({
    type: types.SUBMIT,
    payload:contact,
})


const changeFilter = evt =>({
    type: types.FILTER,
    payload: evt.currentTarget.value,
})


const deleteContacts = contactId =>({
    type: types.DELETE,
    payload: contactId,
})

export default {submit, changeFilter, deleteContacts};