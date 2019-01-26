import {ADD_CONTACT, ADD_TECHNOLOGY, CONTACTS_LOADED, DELETE_TECHNOLOGY} from '../../constants/action-types';
import {ContactsListDTO} from '../../interfaces/contact';
import {Actions} from '../../interfaces/state';
import {Dispatch} from 'redux';
import {contactsList} from '../../components/Contacts/contacts-list-mock';

export function addContact(payload: ContactsListDTO): Actions {
  return {type: ADD_CONTACT, payload}
}

export function addTechnology(payload: string): Actions {
  return {type: ADD_TECHNOLOGY, payload}
}

export function deleteTechnology(payload: number): Actions {
  return {type: DELETE_TECHNOLOGY, payload}
}

export function getContacts() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(contactsList);
    }, 1000);

  });

  return function (dispatch: Dispatch) {
    promise
        .then(
            result => {
              dispatch({type: CONTACTS_LOADED, payload: result});
            }
        );
  }
}
