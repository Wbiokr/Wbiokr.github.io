import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import {
  AnimatedSwitch,
  AnimatedRoute,
  spring
} from 'react-router-transition';

import NavBar from './Nav';

import cxs from 'cxs'

import routes from './Routes'

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename='/'>
        <Route render={({ location }) => (
          <div className={rule} >
            <AnimatedRoute
              className='navigator'
              path='/:any'
              component={NavBar}
              atEnter={{ offset: -100 }}
              atLeave={{ offset: slide(-150) }}
              atActive={{ offset: slide(0) }}
              mapStyle={(styles) => {
                transform: `translateY(${styles.offset})`
              }}
            />
            <AnimatedSwitch
              className={`content ${content}`}
              atEnter={{ offset: 50 }}
              atLeave={{ offset: glide(-100) }}
              atActive={{ offset: glide(0) }}
              mapStyle={(styles) => {
                transform: `translateX(${styles.offset})`
              }}
            >
              {
                routes.map((item, index) => (
                  <Route key={index} path={item.path} exact={item.exact} component={item.component} />
                ))
              }
            </AnimatedSwitch>
          </div>
        )} />
      </BrowserRouter>
    )
  }
}

const slide = (val) => {
  return spring(
    val,
    {
      stiffness: 125,
      damping: 16
    }
  )
}

const glide=(val)=>{
  return spring(
    val,
    {
      stiffness:174,
      damping:24
    }
  )
}

const rule = cxs({
  height: '100%',
  width: '100%',
})

const content = cxs({
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: 1,
  ' >div': {
    height: '100%',
    width: '100%',
  }
})

