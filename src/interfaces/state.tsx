import {ContactsListDTO} from './contact';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {PersonInfo} from './personal-info';

export interface StateReducer {
  contactsList: ContactsListDTO[];
  technologiesList: string[];
  contactById: ContactsListDTO;
  personInfo: PersonInfo;
}

export interface Actions {
  type: string;
  payload: any;
}

type MyRootState = {};
type MyExtraArg = undefined;
export type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;