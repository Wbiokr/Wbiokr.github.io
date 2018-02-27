import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';

import myReducer from './reducers/';

export default createStore(myReducer,compose(applyMiddleware(thunk)))