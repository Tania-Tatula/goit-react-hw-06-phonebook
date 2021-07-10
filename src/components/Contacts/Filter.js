import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import styles from "./Contacts.module.css";

const Filter = ({ value, onChange }) => (
  <div className={styles.contactsBlock}>
    <label>
      Find contact by name
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (evt) =>
    dispatch(contactsActions.changeFilter(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
