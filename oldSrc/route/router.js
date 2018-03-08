// import { position } from 'glamor/utils';
// import styled from 'styled-components/primitives';
import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import {AnimatedSwitch,spring} from 'react-router-transition';

// import {css} from 'glamor';
import styled  from 'styled-components';

import Bundlet from './bundle2';

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


// api:location,history,match,matchPath,withRouter
const NoMatch = ({ location,history,match,matchPath,withRouter }) => {
  // console.log(history,match,matchPath,withRouter)
 return <div>
    404Not found for the page: {location.pathname};
  </div>
}

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
    path: '/:string',
    exact: false,
    component: NoMatch,
  },

]

const redirects = [
  {
    from: '/home',
    to: '/'
  },
]

// spring配置函数
const bounce=val=>(
  spring(val,{
    stiffness:100,
    damping:15,
  })
);

// styles对象
const bounceTransition={
  atEnter:{
    opacity:0,
    translateX:1,
  },
  atLeave:{
    opacity:bounce(1),
    translateX:bounce(0),
  },
  atActive:{
    opacity:bounce(1),
    translateX:bounce(0),
  }
}

// 对enter、leave等style进行遍历包装
const mapStyles=styles=>(
   {
    opacity:styles.opacity,
    transform:`translateY(${100*styles.translateX}%) `,
  }
);



class Routes extends React.Component {
  render() {
    return (
      // switch的作用：可以设置默认的路由
      // <Switch>
      <AnimatedSwitch 
        // runOnMount={true} 
        wrapperComponent='div'  
        // className='switch-wrapper'
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        // style={switchRule}
      >
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
          </AnimatedSwitch>
          // </Switch>
    )
  }
}

export default Routes;

// 路由页面较多时候，按需加载方法：
// 1.Route的component改为 getComponent
// 2.路由组件用require.ensure的烦那个是获取