import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../style/normalize.styl';
import '../style/app.styl';
import 'animate.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Aside from '../components/layout/Aside';

import '../modules/config/config';


class App extends React.Component{
  
  render(){
    const supportHistory='pushState' in window.history;
    return(
      // <Provider store={store}>
      <BrowserRouter forceRefrest={!supportHistory} keyLength={12} >
        <div className='wrapper' >
          <Header />
          <Main />
          <Footer />
          <Aside />
        </div>
        </BrowserRouter>
        
    )
  }
}

export default App;