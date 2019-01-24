import {ContactsListDTO} from './contact';

export interface StateReducer {
  contactsList: ContactsListDTO[];
}