import React from 'react';
import {Link} from 'react-router-dom';
import Search from '../button/Search';
// import {Icon } from 'antd';
import Icon from '../icon/icon';

const Logo=()=>(
  <div className='headerLogo' >
    <Icon type='windows8'/>
    <Icon type='windows8' className='reflect'/>
    <span className='logoTxt' >WBIOKR</span>  
  </div>
);

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      navList:[
        {
          path:'/',
          typs:'icon',
          name:'首页',
          current:true,
        },
        {
          path:'/blogs',
          typs:'boke',
          name:'博客',
          current:false,
        },
        {
          path:'/comments',
          typs:'liuyan',
          name:'留言',
          current:false,
        },
        {
          path:'/time',
          typs:'zhongbiaoxian',
          name:'时间轴',
          current:false,
        },
        {
          path:'/about',
          typs:'guanyu',
          name:'关于',
          current:false,
        },
      ]
    }
  }
  render(){
    console.log(this.state.navList)
    return(
      <header>
        <div className='headerWrapper'>
          <Logo name='headerLogo' />
          <nav className='headerNav'>
            <ul className='clearfix'>
            {
              this.state.navList.map((item,index)=>(
                <li key={index}><Link to={item.path} className={item.current?'current i-h-10':'i-h-10'} ><Icon type={item.typs} /><span>{item.name}</span></Link></li>
              ))
            }
            </ul>
          </nav>
          <Search />
        </div>
      </header>
    )
  }
}
  

export default Header ;