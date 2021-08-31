import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import Styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={Styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={Styles.li}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => dispatch(actions.deleteContact(id))}
              className={Styles.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;