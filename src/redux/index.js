import {
  createStore,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import myReducer from './reducers/';

export default createStore(myReducer,applyMiddleware(thunk))