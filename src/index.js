import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './views/app';

import './utils/';

import store from './redux/';

const render=()=>(
  ReactDOM.render(
    <Provider {...{store}}>
      <App />
    </Provider>
  )
)

render()

let unsubscribe=store.subscribe(render);

unsubscribe();