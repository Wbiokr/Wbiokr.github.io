import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Routes from '../route/';


export default class App extends React.Component{
  render(){
    const nav=[
      {title:'音乐',path:'/music'},
      {title:'电影',path:'/movie'},
      {title:'旅行',path:'/tour'},
      {title:'项目',path:'/opus'},
      {title:'作者',path:'/author'},
    ]
    return(
      <Router>
        <div className="wrapper">
          <Header />
          <main>
            <Routes nav={nav} />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

const Header=({nav})=>(
  <header>
    <section className='logo'></section>
    <nav>
      <ul>
        {
          nav.map((item,index)=>(
            <li><Link to={item.path}>{}item.title|</Link></li>
          ))
        }
        <li><Link to='https://github.com/Wbiokr/Wbiokr.github.io/'>github</Link></li>
      </ul>
    </nav>
  </header>
)

const Footer=()=>(
  <footer>
    <p>sdfds</p>
  </footer>
)