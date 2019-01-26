import {contactsList} from '../../components/Contacts/contacts-list-mock';
import {ADD_CONTACT, ADD_TECHNOLOGY, DELETE_TECHNOLOGY, INCORRECT_TECHNOLOGY} from '../../constants/action-types';
import {technologiesListMock} from '../../components/Home/home-mock';
import {Actions} from '../../interfaces/state';
import {toast} from 'react-toastify';

const initialState = {
  contactsList: contactsList,
  technologiesList: technologiesListMock,
};
function rootReducer(state = initialState, action: Actions) {
  let toastId = 0;
  switch (action.type) {
    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactsList: state.contactsList.concat(action.payload)
      });

    case ADD_TECHNOLOGY:
      return Object.assign({}, state, {
        technologiesList: state.technologiesList.concat(action.payload)
      });

    case DELETE_TECHNOLOGY:
      const technologiesListCopy = state.technologiesList.slice();
      technologiesListCopy.splice(action.payload, 1);
      return Object.assign({}, state, {
        technologiesList: technologiesListCopy
      });

    case INCORRECT_TECHNOLOGY:
      if (!toast.isActive(toastId)) {
        toastId = toast.error(`Technology name is incorrect. Use only letters, numbers and special symbols: - ' space`);
      }

    default:
      return state;
  }
}

export default rootReducer;
