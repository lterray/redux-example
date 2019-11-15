import * as actionTypes from './actionTypes';

const syncIncrement = () => {
  return {
    type: actionTypes.INCREMENT
  }
};

export const increment = () => {
  // use ReduxThink to simulate server side async call
  return (dispatch, getState) => {
    // we don't use the getState here but it can be useful for
    // sending data to the server call for example
    setTimeout(() => {
      dispatch(syncIncrement())
    }, 2000);
  }
};

export const add = (payload) => {
  return {
    ...payload,
    type: actionTypes.ADD,
  }
};