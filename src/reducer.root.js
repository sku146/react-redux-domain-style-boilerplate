import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  router: routerReducer,
});

