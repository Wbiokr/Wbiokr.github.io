import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import App from './views/app.jsx';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
//监听touch、tap、click事件处理300ms延迟插件
// 对react所有组件提供了一个onTouchTap()方法处理手机端的的点击事件
import store from './redux/store';
injectTapEventPlugin();


store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

// ------------demo1-----------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// // import reducer from './wtest/deom1/reducer.js';
// import reducer from './wtest/demo1/reducer';
// import generateTree from './wtest/deom1/generateTree';
// import Node from './wtest/demo1/node'
// const tree=generateTree();
// const store=createStore(reducer,tree);

// ReactDOM.render(
//   <Provider store={store}>
//     <Node id={0} />
//   </Provider>,
//   document.querySelector('#root')
// )
