// TODO: Change to configure store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthMiddleware from '../middleware/auth';
import combineReducers from '../reducer';

const store = createStore(
  combineReducers,
  applyMiddleware(thunk,AuthMiddleware),
);
export {store};
