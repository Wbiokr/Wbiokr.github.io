import React from 'react';
import {
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import {
  // AnimatedSwitch,
  // spring
} from 'react-router-transition';

import Bundle from './bundle';

const Home=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Home').default)
      }, 'home')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Music=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Music').default)
      }, 'music')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Movie=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Movie').default)
      }, 'movie')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Tour=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Tour').default)
      }, 'tour')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Opus=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Opus').default)
      }, 'opus')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Author=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/Author').default)
      }, 'author')
    }
  }>
    {Com=><Com {...props} />}
  </Bundle>
);

const Nomatch=props=>(
  <Bundle load={
    cb=>{
      require.ensure([],require=>{
        cb(require('../views/containers/404').default)
      },'404')
    }
  }>
    {Com=><Com {...props}/>}
  </Bundle>
)

const routes=[
  {
    path:'/',
    exact:true,
    component:Home,
  },
  {
    path:'/music',
    exact:true,
    component:Music,
  },
  {
    path:'/movie',
    exact:true,
    component:Movie,
  },
  {
    path:'/tour',
    exact:true,
    component:Tour,
  },
  {
    path:'/opus',
    exact:true,
    component:Opus,
  },
  {
    path:'/author',
    exact:true,
    component:Author,
  },
  
]


export default class Routes extends React.Component{
  render(){
    return(
      <Switch>
      {
        routes.map((item,index)=>(
          <Route key={index} path={item.path} exact={item.exact} component={item.component} />
        ))
      }
        <Route component={Nomatch} />
      </Switch>
    )
  }
}