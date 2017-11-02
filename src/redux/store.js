import {createStore} from 'redux';
import reducer from './reducer/';
// import state from './state/state';

 const store=createStore(reducer);

// let 
const next=store.dispatch;

store.dispatch=(action)=>{
  console.log(`dispatching:${JSON.stringify(action)}`)
  next(action);
  console.log(`newState:${JSON.stringify(store.getState())}`);
}

 export default store;