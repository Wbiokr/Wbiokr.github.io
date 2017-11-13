import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../style/normalize.styl';
import '../style/app.styl';
import 'animate.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Aside from '../components/layout/Aside';

import '../modules/config/config';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import store from '../redux/store';


class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  changeScale(){
    if(window.config.appWidth>1200||window.config.appWidth<800) return ;
    const scale=window.config.appWidth/1200;
    document.body.style.transform=`scale(${scale})`;
  }
  changeBack(){
    
    document.body.style.backgroundSize=`${window.config.appWidth}px ${window.config.appHeight}px`
  }
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

const mapStateToProps=state=>({value:state.counter});

const mapDispatchToProps=dispatch=>({
  onIncrement(){
    dispatch()
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App);