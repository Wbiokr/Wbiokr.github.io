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
      <Routes />
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
            <div onClick={this.changeRoute.bind(this,'/')}>
              <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="回到首页" />
              <p>wbiokr.com</p>
            </div>
          </Link>

          <nav>
            <ul>
              {
                nav.map((item, index) => (
                  <Li key={index} onClick={this.changeRoute.bind(this,item.path)} ><Link  className={item.path===this.props.route?'current':''} to={item.path}>{item.title}</Link></Li>
                ))
              }
              <Li><a href='https://github.com/Wbiokr/Wbiokr.github.io/' ><i className="iconfont icon-github" ></i></a></Li>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
  changeRoute(path){
    // setTimeout(()=>{
      console.log(path);
      this.props.changeRoute(path)
    // },500)
    // console.log(this.props)
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
      dispatch(changeRoute(dispatch,name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)