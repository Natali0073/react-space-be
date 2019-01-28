import {ContactsListDTO} from './contact';
import {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import { PersonInfo, TechnologiesListDTO } from './personal-info';
import { PostsListDTO } from './posts';

export interface StateReducer {
  contactsList: ContactsListDTO[];
  technologiesList: TechnologiesListDTO[];
  contactById: ContactsListDTO;
  personInfo: PersonInfo;
  posts: PostsListDTO[];
  postById: PostsListDTO;
}

export interface Actions {
  type: string;
  payload: any;
}

type MyRootState = {};
type MyExtraArg = undefined;
export type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;