import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

// import {CSSTransitionGroup} from 'animate.css';
import { CSSTransitionGroup, CSSTransition } from 'react-transition-group';

import Bundlet from './bundle2';
console.log(CSSTransitionGroup);

// 通过bundle模型来异步加载组件
// 使用方法一的时候，这么配置
// import Bundle from './bundle';
// 使用方法2 的时候这么配置

// 方法1：import()
// const About=()=>(
//   <Bundle load={()=>import('../components/views/aboutPage')}>
//     {(Component)=><Component />}
//   </Bundle>
// )

// 方法2：require.ensure()
const Home = (props) => (
  <Bundlet load={
    (cb) => {
      require.ensure([], require => {
        cb(require('../containers/PageHome').default)
      }, 'home');
    }}>
    {(Component) => <Component {...props} />}
  </Bundlet>
);

const About = (props) => (
  <Bundlet load={
    (cb) => {
      require.ensure([], require => {
        cb(require('../containers/PageAbout').default)
      }, 'about')
    }
  }>
    {(Component) => <Component {...props} />}
  </Bundlet>

)

const NoMatch = ({ location }) => (
  <div>
    404Not found for the page: {location.pathname};
  </div>
)

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: false,
    component: About,
  },
  {
    path: '/404',
    exact: false,
    component: NoMatch,
  },

]

const redirects = [
  {
    from: '/:string',
    to: '/404'
  },
  // {
  //   from:'/home',
  //   to:'/'
  // },
  // {
  //   from:'/Home',
  //   to:'/'
  // },
]

class Routes extends React.Component {
  render() {
    return (
      <Switch>
      <CSSTransitionGroup >
      {
        routes.map((item,index)=>(
          
          <Route key={index}  path={item.path} exact={item.exact} component={item.component} />
          
            ))
          }
          {
            redirects.map((item, index) => (
              <Redirect from={item.from} to={item.to} key={index} />
            ))
          }
      </CSSTransitionGroup>
      </Switch>
    )
  }
}

export default Routes;

// 路由页面较多时候，按需加载方法：
// 1.Route的component改为 getComponent
// 2.路由组件用require.ensure的烦那个是获取