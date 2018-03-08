import {
  combineReducers
} from 'redux';

import Music from './music';

import Movie from './movie';

import Status from './status';

export default combineReducers({
  Music,
  Movie,
  Status,
})