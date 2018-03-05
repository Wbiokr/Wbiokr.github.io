import React from 'react'
import Bundle from './bundle'
import { AnimatedSwitch, spring } from 'react-router-transition'
import { Route } from 'react-router-dom'
import cxs from 'cxs'
import Screen from './Screen'


const HomePage = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Home').default)
      }, 'home')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

export const Home=()=>{
  return <Screen><HomePage /></Screen>
}

const Music = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Music').default)
      }, 'music')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

const Movie = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Movie').default)
      }, 'movie')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

const Tour = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Tour').default)
      }, 'tour')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

const Opus = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Opus').default)
      }, 'opus')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

const Author = props => (
  <Bundle load={
    cb => {
      require.ensure([], require => {
        cb(require('../containers/Author').default)
      }, 'author')
    }
  }>
    {Com => <Com {...props} />}
  </Bundle>
);

// const Nomatch = props => (
//   <Bundle load={
//     cb => {
//       require.ensure([], require => {
//         cb(require('../containers/404').default)
//       }, '404')
//     }
//   }>
//     {Com => <Com {...props} />}
//   </Bundle>
// )

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: Home,
  // },
  {
    path: '/music',
    exact: true,
    component: Music,
  },
  {
    path: '/movie',
    exact: true,
    component: Movie,
  },
  {
    path: '/tour',
    exact: true,
    component: Tour,
  },
  {
    path: '/opus',
    exact: true,
    component: Opus,
  },
  {
    path: '/author',
    exact: true,
    component: Author,
  },

]


export default () => (
  <Screen>
    <div className={rule}>
      <AnimatedSwitch
        className='fsdfsdfsdf'
        {...switchConfig}
        mapStyles={styles => (
          {
            opacity: styles.opacity,
            transform: `translateY(${styles.offset}px)`,
          }
        )}
      >
        <Route path='/music' component={Music} />
        <Route path='/movie' component={Movie} />
        <Route path='/tour' component={Tour} />
        <Route path='/opus' component={Opus} />
        <Route path='/author' component={Author} />
      </AnimatedSwitch>
    </div>
  </Screen>
)

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50,
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50),
  },
  atActive: {
    opacity: 1,
    offset: zoom(0),
  },
};

function zoom(val) {
  return spring(val, {
    stiffness: 135,
    damping: 15,
  });
}

const rule=cxs({
  height: '100%',
  width: '100%',
  // backgroundColor: '#fff',
  ' > div' :{
    // position: 'absolute',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    // '-webkit-overflow-scrolling': 'touch',
    ' >div':{
      height:'100%'
    }
  }
})