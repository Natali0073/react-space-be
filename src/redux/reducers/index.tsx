import {
  ADD_CONTACT,
  ADD_TECHNOLOGY, CONTACT_BY_ID_LOADED,
  CONTACTS_LOADED,
  DELETE_TECHNOLOGY,
  INCORRECT_TECHNOLOGY, PERSON_INFO_LOADED, POSTS_BY_ID_LOADED, POSTS_LOADED, TECHNOLOGIES_LOADED
} from '../../constants/action-types';
import {Actions} from '../../interfaces/state';
import {toast} from 'react-toastify';

const initialState = {
  contactsList: [],
  contactById: null,
  technologiesList: [],
  personInfo: null,
  posts: [],
  postById: null,
};

function rootReducer(state = initialState, action: Actions) {
  let toastId = 0;
  switch (action.type) {
    case CONTACTS_LOADED:
      return Object.assign({}, state, {
        contactsList: action.payload
      });

    case CONTACT_BY_ID_LOADED:
      return Object.assign({}, state, {
        contactById: action.payload
      });


    case ADD_CONTACT:
      return Object.assign({}, state, {
        contactsList: state.contactsList.concat(action.payload)
      });

    case PERSON_INFO_LOADED:
      return Object.assign({}, state, {
        personInfo: action.payload
      });

    case TECHNOLOGIES_LOADED:
      return Object.assign({}, state, {
        technologiesList: action.payload
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

    case POSTS_LOADED:
      return Object.assign({}, state, {
        posts: action.payload
      });

    case POSTS_BY_ID_LOADED:
      return Object.assign({}, state, {
        postById: action.payload
      });

    default:
      return state;
  }
}

export default rootReducer;
