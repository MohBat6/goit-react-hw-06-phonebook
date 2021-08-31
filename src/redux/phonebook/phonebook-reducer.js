import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

const phoneBookReducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default phoneBookReducers;