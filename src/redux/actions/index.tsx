import {
  ADD_CONTACT,
  ADD_TECHNOLOGY, CONTACT_BY_ID_LOADED,
  CONTACTS_LOADED,
  DELETE_TECHNOLOGY, PERSON_INFO_LOADED,
  TECHNOLOGIES_LOADED
} from '../../constants/action-types';
import {ContactsListDTO} from '../../interfaces/contact';
import {Dispatch} from 'redux';
import {contactsList} from '../../components/Contacts/contacts-list-mock';
import {homeData, technologiesListMock} from '../../components/Home/home-mock';
import {toast} from 'react-toastify';

export const addContact = (payload: ContactsListDTO) =>{
  return {type: ADD_CONTACT, payload}
};

export const addTechnology = (payload: string) => {
  return {type: ADD_TECHNOLOGY, payload}
};

export const deleteTechnology = (payload: number) => {
  return {type: DELETE_TECHNOLOGY, payload}
};

export const getContacts = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(contactsList);
      reject(new Error('Could not load the data'));
    }, 1000);

  });

  return (dispatch: Dispatch) => {
    promise
        .then(
            result => {
              dispatch({type: CONTACTS_LOADED, payload: result});
            }, error => {
              toast.error(error.message);
            }
        );
  }
};

export const getContactById = (id: number) => {
  const contacts = contactsList.filter(el => el.id === id);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(contacts[0]);
      reject(new Error('Could not load the data'));
    }, 1000);

  });

  return (dispatch: Dispatch) => {
    promise
        .then(
            result => {
              console.log('dispatch', CONTACT_BY_ID_LOADED);
              dispatch({type: CONTACT_BY_ID_LOADED, payload: result});
            }, error => {
              toast.error(error.message);
            }
        );
  }
};

export const getPersonData = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(homeData);
      reject(new Error('Could not load the data'));
    }, 1000);
  });

  return (dispatch: Dispatch) => {
    promise
        .then(
            result => {
              dispatch({type: PERSON_INFO_LOADED, payload: result});
            }, error => {
              toast.error(error.message);
            }
        );
  }
};

export const getTechnologies = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(technologiesListMock);
      reject(new Error('Could not load the data'));
    }, 1000);
  });

  return (dispatch: Dispatch) => {
    promise
        .then(
            result => {
              dispatch({type: TECHNOLOGIES_LOADED, payload: result});
            }, error => {
              toast.error(error.message);
            }
        );
  }
};
