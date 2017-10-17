import React from 'react';
import '../style/common/normalize.styl';
import '../style/common/app.styl';
import Header from '../components/layout/Header.js';
import Footer from '../components/layout/Footer.js';
import Main from '../components/layout/Main.js';
import Aside from '../components/layout/Aside.js';

import '../modules/config/config.js';

class App extends React.Component{
  constructor(props){
    super(props);
    // console.log(window.config);
    // this.changeScale();
    // this.changeBack();
  }
  changeScale(){
    if(window.config.appWidth>1200||window.config.appWidth<800) return ;
    const scale=window.config.appWidth/1200;
    document.body.style.transform=`scale(${scale})`;
  }
  changeBack(){
    
    document.body.style.backgroundSize=`${window.config.appWidth}px ${window.config.appHeight}px`
  }
  render(){
    return(
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
        <Aside />
      </div>
    )
  }
}

export default App;