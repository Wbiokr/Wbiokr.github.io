import React from 'react';

import {
  Link,
  NavLink,
} from 'react-router-dom'

import { AnimatedRoute, } from 'react-router-transition'

import cxs from 'cxs'

import {connect} from 'react-redux'



const nav = [
  { title: '音乐', path: '/music' },
  { title: '电影', path: '/movie' },
  { title: '旅行', path: '/tour' },
  { title: '项目', path: '/opus' },
  { title: '作者', path: '/author' },
]

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <header className={wrapper}>
        <nav  className={rule}>
          <li>
            <Link to='/' title='回到首页' >
              <div onClick={()=>{
                this.props.dispatch({
                  type:'CHANGE_ROUTE',
                  action:{
                    name:'/'
                  }
                })
              }}>
                <img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="回到首页" />
                <p>wbiokr.com</p>
              </div>
            </Link>
          </li>
          {
            nav.map((item, index) => {
              return <li key={index}>
                      <NavLink to={item.path} className={this.props.location.pathname===item.path?'current':''}><span onClick={()=>{
                        this.props.dispatch({
                          type:'CHANGE_ROUTE',
                          name:item.path
                        })
                      }}>{item.title}</span></NavLink>
                    </li>
            })
          }

          <li >
            <a href="https://github.com/Wbiokr/Wbiokr.github.io/">GitHub</a>
          </li>
        </nav>
      </header>
    )
  }

}

export default connect(mapStateToProps)(NavBar)

const mapStateToProps=(state)=>(
  {
    status:state.Status
  }
)

const wrapper=cxs({
  position: 'fixed',
  height: '50px',
  width: '100%',
  background: 'rgba(7,11,32,0.98)',
  zIndex:10,
})

const rule=cxs({
    width: '1200px',
    height: '100%',
    margin: ' 0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    ' li':{
      flex: 1,
      textAlign: 'right',
      ':first-child':{
        flex: 8,
        textAlign: 'left',
        display: 'flex',
        ' div':{
          display:'flex',
          alignItems:'center',
          ' img':{
            marginRight:'15px'
          }
        }
      },
      ' a':{
        color:'rgba(255,255,255,0.6)',
        ':hover span,.current span':{
          "color":'rgba(255,255,255,0.9)'
        }
      }
    }
})
