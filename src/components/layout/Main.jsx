import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import Routes from '../../route/router';

class Main extends React.Component {
  componentDidMount(){
    // console.log(Home)
  }
  render(){
    return(
      <main>
        <Routes />
      </main>
    )
    
  }
}

export default Main;