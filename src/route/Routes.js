import React from 'react'
import Bundle from './bundle'
// import { AnimatedSwitch, spring } from 'react-router-transition'
// import { Route } from 'react-router-dom'
// import cxs from 'cxs'
import Screen from './Screen'

function bund(chunk){
  return  props => (
        <Bundle load={
          cb => {
            require.ensure([], require => {
              cb(require(`../containers/${chunk}`).default)
            })
          }
        }>
          {Com => <Com {...props} />}
        </Bundle>
      )
}

const HomePage=bund('Home','afsddaf')
// const HomePage = props => (
//   <Bundle load={
//     cb => {
//       require.ensure([], require => {
//         cb(require('../containers/Home').default)
//       }, 'home')
//     }
//   }>
//     {Com => <Com {...props} />}
//   </Bundle>
// );

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

export default [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
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


// const app = () => (
//   <Screen>
//     <div className={rule}>
//       <AnimatedSwitch
//         className='fsdfsdfsdf'
//         {...switchConfig}
//         mapStyles={styles => (
//           {
//             // opacity: styles.opacity,
//             // transform:`scale(${styles.opacity})`
//             transform: `translateX(${styles.offset}%)`,
//           }
//         )}
//       >
//         <Route path='/music' component={Music} />
//         <Route path='/movie' component={Movie} />
//         <Route path='/tour' component={Tour} />
//         <Route path='/opus' component={Opus} />
//         <Route path='/author' component={Author} />
//       </AnimatedSwitch>
//     </div>
//   </Screen>
// )

// const switchConfig = {
//   atEnter: {
//     // opacity: 0,
//     offset: 150,
//   },
//   atLeave: {
//     // opacity: 0,
//     offset: -100,
//   },
//   atActive: {
//     // opacity: 1,
//     offset: 0,
//   },
// };

// function zoom(val) {
//   return spring(val, {
//     stiffness: 135,
//     damping: 15,
//   });
// }

// const rule=cxs({
//   height: '100%',
//   width: '100%',
//   // backgroundColor: '#fff',
//   ' > div' :{
//     // position: 'absolute',
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//     // '-webkit-overflow-scrolling': 'touch',
//     ' >div':{
//       height:'100%'
//     }
//   }
// })