import * as actionTypes from './actionTypes';

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
};

export const substract = (payload) => {
  return {
    ...payload,
    type: actionTypes.SUBSTRACT
  }
};