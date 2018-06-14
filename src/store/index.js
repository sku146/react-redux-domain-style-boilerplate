/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer.root';
import { routerMiddleware } from 'react-router-redux';

const initialState = fromJS({});

export default (history, debug = false) => {
  const composeEnhancers = (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middleware = [
    routerMiddleware(history),
  ];

  if (debug) {
    middleware.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (debug && module.hot) {
    module.hot.accept('../reducer.root', () => {
      const nextReducers = require('../reducer.root');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
