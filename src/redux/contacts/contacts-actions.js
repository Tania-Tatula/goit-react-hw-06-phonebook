import { createAction } from "@reduxjs/toolkit";

const submit = createAction("contacts/submit");

const changeFilter = createAction("contacts/filter");

const deleteContacts = createAction("contacts/delete");

export default { submit, changeFilter, deleteContacts };
