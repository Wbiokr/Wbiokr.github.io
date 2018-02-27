import React from 'react';
import {
  connect
} from 'react-redux';
import {
  BrowserRouter as Router,
  // Route,
  Link,
} from 'react-router-dom';
import Routes from '../route/';

import {
  changeRoute
} from '../redux/actions/index';

import './app.styl'

import styled from 'styled-components';

class App extends React.Component {
  render() {
    const nav = [
      { title: '音乐', path: '/music' },
      { title: '电影', path: '/movie' },
      { title: '旅行', path: '/tour' },
      { title: '项目', path: '/opus' },
      { title: '作者', path: '/author' },
    ]
    return (
      <Router>
        <div className="wrapper">
          <Header nav={nav} route={this.props.status.route} changeRoute={this.props.changeRoute}/>
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

const Li = styled.li`
  float:left;
  margin-left:50px;
  /* color:#fff; */
`

class Header extends React.Component {
  render() {
    const { nav, route }=this.props;
    return (
      <header className={route === '/' ? 'home' : ''}>
        <div className='content'>
          <Link className='logo' to='/' title='回到首页'>
            <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="回到首页" />
            <p>wbiokr.com</p>
          </Link>

          <nav>
            <ul>
              {
                nav.map((item, index) => (
                  <Li key={index} ><a onClick={this.changeRoute.bind(this,item.path)} className={item.path===this.props.route?'current':''} to={item.path}>{item.title}</a></Li>
                ))
              }
              <Li><a href='https://github.com/Wbiokr/Wbiokr.github.io/'>github</a></Li>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
  changeRoute(path){
    this.props.changeRoute(path)
    // setTimeout(()=>{
    //   alert(path)
    //   window.location.href=path
    // },200)
  }
} 

const Footer = () => (
  <footer>
  </footer>
)

const mapStateToProps = (state) => {
  return {
    status: state.Status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: function (name) {
      alert(8888)
      dispatch(changeRoute(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)