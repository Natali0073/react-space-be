import {ADD_TECHNOLOGY, INCORRECT_TECHNOLOGY} from '../../constants/action-types';
import {Dispatch, Middleware} from 'redux';

export const checkTechnologyMiddleware: Middleware = store => (next: Dispatch) => action => {
  if (action.type === ADD_TECHNOLOGY) {
    const itemNameCorrect = /^[ A-Za-z0-9\s\-\\']*$/.test(action.payload.name);
    if (!itemNameCorrect) {
      return store.dispatch({ type: INCORRECT_TECHNOLOGY });
    }
  }

  return next(action);
};
