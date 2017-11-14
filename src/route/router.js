import React from 'react';
import {Switch,Route} from 'react-router-dom';

// 通过bundle模型来异步加载组件
// 使用方法一的时候，这么配置
// import Bundle from './bundle';
// 使用方法2 的时候这么配置
import Bundlet from './bundle2';

// 方法1：import()
// const About=()=>(
//   <Bundle load={()=>import('../components/views/aboutPage')}>
//     {(Component)=><Component />}
//   </Bundle>
// )

// 方法2：require.ensure()
const Home=(props)=>(
  <Bundlet load={
    (cb)=>{
      require.ensure([],require=>{
        cb(require('../containers/PageHome').default)
      },'home');
    }}>
  {(Component)=><Component {...props} />}
  </Bundlet>
);

const About=(props)=>(
  <Bundlet load={
    (cb)=>{
      require.ensure([],require=>{
        cb(require('../containers/PageAbout').default)
      },'about')
    }
  }>
  {(Component)=><Component {...props} />}
  </Bundlet>
  
)


class Routes extends React.Component{
  render(){
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    )
  }
}

export default Routes;

// 路由页面较多时候，按需加载方法：
// 1.Route的component改为 getComponent
// 2.路由组件用require.ensure的烦那个是获取