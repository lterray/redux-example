import * as actionType from '../actions/actionTypes';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DECREMENT:
      return { counter: --state.counter }
    case actionType.SUBSTRACT:
      return { counter: state.counter - action.value }
    default:
      return state;
  }
};

export default reducer;