import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './views/app.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
//监听touch、tap、click事件处理300ms延迟插件
// 对react所有组件提供了一个onTouchTap()方法处理手机端的的点击事件
injectTapEventPlugin();



ReactDOM.render(
  (<BrowserRouter>
    <App />
  </BrowserRouter>),
  document.querySelector('#root')
)