import {contactsList} from '../components/Contacts/contacts-list-mock';
import {ADD_CONTACT} from '../constants/action-types';

const initialState = {
  contactsList: contactsList,
};
function rootReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactsList: state.contactsList.concat(action.payload)
      });

    default:
      return state;
  }
}

export default rootReducer;

export interface Actions {
  type: string;
  payload: any;
}