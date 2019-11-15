import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return updateObject({ counter: ++state.counter });
    case actionType.ADD:
      return updateObject({ counter: state.counter + action.value });
    default:
      return state;
  }
};

export default reducer;