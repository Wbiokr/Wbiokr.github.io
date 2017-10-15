import React from 'react';
import '../style/css/normalize.css';
// import 'antd/dist/antd.css';
import {Button} from 'antd';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Main from '../components/Main.js';

const App=()=>(
  <div className='wrapper'>
    <Header />
    <Main />
    <Footer />
    <Button type='danger' ghost>Button</Button>
  </div>
)

export default App;