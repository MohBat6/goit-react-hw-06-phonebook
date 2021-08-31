import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={Styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.filterContacts(e.currentTarget.value))}
        className={Styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;