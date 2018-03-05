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

import Routes,{Home} from './Routes'

export default class Router extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <BrowserRouter basename='/'>
        <Route render={({ location }) => (
          <div className={rule} >
            <AnimatedSwitch
              className={`content ${content}`}
              atEnter={{
                offset: 100,
              }}
              atLeave={{
                offset: glide(-100),
              }}
              atActive={{
                offset: glide(0),
              }}
              runOnMount={location.pathname === '/'}
              mapStyles={styles => ({
                transform: `translateX(${styles.offset}%)`,
              })}
            >
                <Route exact component={Home} path='/' /> 
                <Route component={Routes} />
            </AnimatedSwitch>
            <AnimatedRoute
              className={`navigator ${header}`}
              path='/:any'
              component={NavBar}
              atEnter={{ offset: -100 }}
              atLeave={{ offset: -150 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => {
                return {
                  transform: `translateY(${styles.offset}%)`
                }
              }}
            />
          </div>
        )} />
      </BrowserRouter>
    )
  }
}

function glide(val) {
  return spring(
    val,
    {
      stiffness: 174,
      damping: 24
    }
  )
}



const rule = cxs({
  height: '100%',
  width: '100%',
})

const content = cxs({
  height: '100%',
  width: '100%',
  ' >div': {
    position: 'fixed',
    // zIndex: 1,
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  }
})

const header = cxs({
  // height: '100%',
  // width: '100%',
  ' >div': {
    position: 'fixed',
    // zIndex: 100,
    // height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  }
})
