import {ContactsListDTO} from './contact';

export interface StateReducer {
  contactsList: ContactsListDTO[];
  technologiesList: string[];
}

export interface Actions {
  type: string;
  payload: any;
}