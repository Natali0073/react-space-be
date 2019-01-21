import {ADD_CONTACT} from '../constants/action-types';
import {Actions} from '../reducers';

export function addContact(payload: any): Actions {
  return {type: ADD_CONTACT, payload}
}
