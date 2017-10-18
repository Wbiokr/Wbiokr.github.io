import React from 'react';
import {Switch,Route} from 'react-router-dom';

// 通过bundle模型来异步加载组件
import Bundle from './bundle';

// 
import Home from '../components/views/homePage';


// 异步引入页面组件方法
// import AboutPage from 'bundle-loader?lazy&name=app-[name]!./app/list.js';
// const AboutPage=require("bundle-loader?lazy&name=[name]-chunk!../components/views/aboutPage");
const About=()=>(
  <Bundle load={()=>import('../components/views/aboutPage')}>
    {(Component)=><Component />}
  </Bundle>
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