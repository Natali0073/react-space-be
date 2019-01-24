import {ADD_CONTACT} from '../constants/action-types';
import {Actions} from '../reducers';
import {ContactsListDTO} from '../interfaces/contact';

export function addContact(payload: ContactsListDTO): Actions {
  return {type: ADD_CONTACT, payload}
}
