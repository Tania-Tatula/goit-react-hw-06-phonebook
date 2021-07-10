// import React, { Component } from "react";
// import { connect } from "react-redux";
// import ContactForm from "./components/Contacts/ContactForm";
// import Filter from "./components/Contacts/Filter";
// import ContactList from "./components/Contacts/ContactList";
// import *as actions from './redux/contacts/contacts-actions';
// import styles from "./components/Contacts/Contacts.module.css";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = (contact) => {
//     const { contacts } = this.state;
//     const names = contacts.map((contact) => contact.name);
//     names.includes(contact.name)
//       ? alert(`${contact.name} is already in contacts.`)
//       : this.setState((prevState) => ({
//           contacts: [contact, ...prevState.contacts],
//         }));
//   };

//   changeFilter = (evt) => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const filterLowerCase = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterLowerCase)
//     );
//   };

//   deleteContacts = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   render() {
//     return (
//       <div className={styles.App}>

//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList
//           contactList={this.getVisibleContacts()}
//           onDeleteContact={this.deleteContacts}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     contacts: state.items,
//     filter: state.filter,
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return{
//     formSubmitHandler: () => dispatch(actions.submit(this.state))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from "react";
import ContactForm from "./components/Contacts/ContactForm";
import Filter from "./components/Contacts/Filter";
import ContactList from "./components/Contacts/ContactList";
import styles from "./components/Contacts/Contacts.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
