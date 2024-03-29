import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerAdd from "./store/reducers/counterAdd";
import reducerSubstract from "./store/reducers/counterSubstract";

const rootReducer = combineReducers({
  'reducerAdd': reducerAdd,
  'reducerSubstract': reducerSubstract
});

// middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action.type);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
