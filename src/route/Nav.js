import React from 'react';

import {
  Link,
  NavLink,  
} from 'react-router-dom'

import {
  AnimatedRoute,
} from 'react-router-transition'

import {
  css
} from 'glamor'

const nav = [
  { title: '音乐', path: '/music' },
  { title: '电影', path: '/movie' },
  { title: '旅行', path: '/tour' },
  { title: '项目', path: '/opus' },
  { title: '作者', path: '/author' },
]

export default class NavBar extends React.Component{
  render(){
    return (
      <header>
        <nav>
          <li>
            <Link to='/' title='回到首页'>
              <div>
                <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="回到首页" />
                <p>wbiokr.com</p>
              </div>
            </Link>
          </li>
          {
            nav.map((item,index)=>{
              return <li>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
            })
          }

          <li>
            <a href="https://github.com/Wbiokr/Wbiokr.github.io/"><i className="iconfont icon-github" ></i>GitHub</a>
          </li>
        </nav>
      </header>
    )
  }
}
