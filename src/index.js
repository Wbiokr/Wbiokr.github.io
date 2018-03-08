import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './route/';

import './utils/';

import store from './redux/';

import './normalize.styl'


const render=()=>(
  ReactDOM.render(
    <Provider store={store}>
      <App {...store.getState()} />
    </Provider>,
    document.querySelector('#root')
  )
)

render()


let unsubscribe=store.subscribe(render);

unsubscribe();