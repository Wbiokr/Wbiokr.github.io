import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import Routes from '../../route/router';

// import Home from '../../views/home/homePage.js';
// import About from '../../views/about/aboutPage.js';

// console.log(About)
// const Home=()=>(
//   <div>首页啊</div>
// )
// const About=()=>(
//   <div>关于啊</div>
// )
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