import {
  ADD_CONTACT,
  ADD_TECHNOLOGY, CONTACT_BY_ID_LOADED,
  CONTACTS_LOADED,
  DELETE_TECHNOLOGY, PERSON_INFO_LOADED, POSTS_BY_ID_LOADED, POSTS_LOADED,
  TECHNOLOGIES_LOADED
} from '../../constants/action-types';
import { ContactsListDTO } from '../../interfaces/contact';
import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { PostsListDTO } from '../../interfaces/posts';
import { PersonInfo, TechnologiesListDTO } from '../../interfaces/personal-info';

const requestHeaders = new Headers();
requestHeaders.append('Content-Type', 'application/json');

export const addTechnology = (payload: string) => {
  return {type: ADD_TECHNOLOGY, payload}
};

export const deleteTechnology = (payload: number) => {
  return {type: DELETE_TECHNOLOGY, payload}
};

export const getContacts = () => {
  return (dispatch: Dispatch) => {
    return fetch('/api/contacts', {method: 'GET'})
            .then(response => response.json())
            .then((json: ContactsListDTO[]) => {
              dispatch({type: CONTACTS_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };
};

export const getContactById = (id: number) => {
  return (dispatch: Dispatch) => {
    return fetch(`/api/contacts/${id}`)
            .then(response => response.json())
            .then((json: ContactsListDTO[]) => {
              dispatch({type: CONTACT_BY_ID_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };
};

export const addContact = (newContact: ContactsListDTO) => {
  return (dispatch: Dispatch) => {
    return fetch('/api/contacts', {
      headers: requestHeaders,
      method: 'POST',
      body: JSON.stringify(newContact)
    })
            .then(response => response.json())
            .then((json: ContactsListDTO[]) => {
              dispatch({type: ADD_CONTACT, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };

};

export const getPersonData = () => {
  return (dispatch: Dispatch) => {
    return fetch('/api/person-info')
            .then(response => response.json())
            .then((json: PersonInfo) => {
              dispatch({type: PERSON_INFO_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  }
};

export const getTechnologies = () => {
  return (dispatch: Dispatch) => {
    return fetch('/api/person-technologies', {method: 'Get'})
            .then(response => response.json())
            .then((json: TechnologiesListDTO[]) => {
              dispatch({type: TECHNOLOGIES_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };
};

export const getPosts = () => {
  return (dispatch: Dispatch) => {
    return fetch('/api/posts')
            .then(response => response.json())
            .then((json: PostsListDTO[]) => {
              dispatch({type: POSTS_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };
};

export const getPostById = (id: number) => {
  return (dispatch: Dispatch) => {
    return fetch(`/api/posts/${id}`)
            .then(response => response.json())
            .then((json: PostsListDTO[]) => {
              dispatch({type: POSTS_BY_ID_LOADED, payload: json});
            }, error => {
              toast.error(error.message);
            });
  };
};
