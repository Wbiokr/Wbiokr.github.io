import React from 'react'
import Bundle from './bundle'

const Home = props => (
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
    component: Home,
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