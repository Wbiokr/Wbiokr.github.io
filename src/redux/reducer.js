import {combineReducers} from 'redux';

import music from './reducer/music';
import blogs from './reducer/blogs';
import calenders from './reducer/calenders';

// const reducer=(state=0,action)=>{
//   switch(action.type){
//     case 'ADD':
//       return state+action.num
//     default :
//       return state;
//   }
// }

const reducer=combineReducers({
  music,
  blogs,
  calenders,
})

export default reducer ;