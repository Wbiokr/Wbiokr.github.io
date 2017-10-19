// import {combineReducers} from 'redux';
// import blog from './reducer/blogs';
// import calender from './reducer/calenders';
// import music from './reducer/music';

// const wbiokr=combineReducers({
//   blog,
//   calender,
//   music,
// })

// export default wbiokr ;
import {combineReducers} from 'redux';
import counter from './reducer/counter.js';

const wbiokr=combineReducers({
  counter,
})

export default wbiokr ;