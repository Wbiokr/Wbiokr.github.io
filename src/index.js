import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './views/app';

import './utils/';

import store from './redux/';


// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// )

const render=()=>(
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  )
)

render()


let unsubscribe=store.subscribe(render);

unsubscribe();