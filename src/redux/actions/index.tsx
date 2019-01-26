import {ADD_CONTACT, ADD_TECHNOLOGY, DELETE_TECHNOLOGY} from '../../constants/action-types';
import {ContactsListDTO} from '../../interfaces/contact';
import {Actions} from '../../interfaces/state';

export function addContact(payload: ContactsListDTO): Actions {
  return {type: ADD_CONTACT, payload}
}

export function addTechnology(payload: string): Actions {
  return {type: ADD_TECHNOLOGY, payload}
}

export function deleteTechnology(payload: number): Actions {
  return {type: DELETE_TECHNOLOGY, payload}
}
