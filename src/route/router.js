import React from 'react';
import {BrowserRouter ,Route,Link} from 'react-router-dom';

const RouteConfig=()=>{
  <BrowserRouter >
    <nav>
      <ul>
        <li><Link to='/'>首页</Link></li>  
        <li><Link to='/blogs'>博客</Link></li>  
        <li><Link to='/time'>时间轴</Link></li>  
        <li><Link to='/about'>关于</Link></li>  
        <li><Link to='/comments'>留言</Link></li>  
      </ul>
    </nav>
    <Route exact path='/' component={res=>require(['../views/home/homePage.js'],res)} />
    <Route exact path='/blogs' component={require('../views/blogs/blogsPage.js')} />
    <Route exact path='/time' component={require('../views/time/timePage')} />
    <Route exact path='/about' component={require('../views/about/aboutPage.js')} />
    <Route exact path='/comments' component={require('../views/comments/commentsPage.js')} />
  </BrowserRouter>
}

export default RouteConfig;