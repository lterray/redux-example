const redux = require('redux');

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (currentState = initialState, action) => {
  let newState;

  if (action.type === 'INC_COUNTER') {
    newState = {...currentState, counter: ++currentState.counter};
  } else if (action.type === 'ADD_COUNTER') {
    newState = {...currentState, counter: currentState.counter + action.value};
  } else {
    newState = currentState;
  }

  return newState;
};

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Suscription
store.subscribe(() => {
  console.log('[subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});

store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());


