import * as actionTypes from './actionTypes';

// action creators should maybe format data (for example returned from a server)
// but logic is maybe better to be placed into the reducers

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
    // YET, it is a better practice to provide necessary data as
    // parameters to the action creator if possible
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