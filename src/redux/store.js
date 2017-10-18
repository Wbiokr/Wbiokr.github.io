import {createStore} from 'redux';

import {connect} from 'react-redux';

import reducer from './reducer.js';

const store=createStore( reducer ,window.initState);
// createStore第二个参数表示state的初始化状态

const VisibleTodoList=connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);;

let {subscribe,dispatch,getState}=store;

subscribe(listener);

function listener(){
  alert('chagne!');
  let newState=store.getState();
  component.setState(newState);
}

export default store;