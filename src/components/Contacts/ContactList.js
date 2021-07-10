import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import styles from "./Contacts.module.css";
import { ReactComponent as CloseIcon } from "../../icons/delete.svg";

const ContactList = ({ contactList, onDeleteContact }) => (
  <>
    <ul className={styles.contactsBlock}>
      {contactList.map(({ name, number, id }) => (
        <li className={styles.contactItem} key={id}>
          {name}: {number}
          <button
            onClick={() => onDeleteContact(id)}
            className={styles.buttonDelete}
            aria-label='Видалити контакт'
          >
            <CloseIcon width='20' height='20' fill='#fff' />
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (filter, items) => {
  const filterLowerCase = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filterLowerCase)
  );
};

const mapStateToProps = ({ contacts: { filter, items } }) => ({
  contactList: getVisibleContacts(filter, items),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(contactsActions.deleteContacts(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
