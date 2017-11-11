import React from 'react';
import './about.styl';
// import {Switch,Route} from 'react-router-dom';

const AboutNavItem=({name,label,handleIdx})=>{
  return <li key={name} className={label} onClick={handleIdx}>{name}</li>
}

const AboutCnt=({cnt})=>(
  <div>{cnt}</div>
)

const navList=[{
    name:'姓名',
    cnt:'陈博先',
  },
  {
    name:'电话',
    cnt:'13304858253',
  },
  {
    name:'籍贯',
    cnt:'河南省-信阳市-浉河区-吴家店镇-太阳坡村',
  },
  {
    name:'QQ',
    cnt:'1144097217',
  },
  {
    name:'微信',
    cnt:'cbx19910306',
  }
]

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
      index:0
    }
  }
  render(){
    return(
      <div className='page_about'>
          <div className="about_nav">
            <ul>
              {
                navList.map((item,idx)=>(
                  <AboutNavItem handleIdx={this.select.bind(this,idx)} name={item.name} key={idx} label={idx===this.state.index?'current':''}/>
                ))
              }
            </ul>
          </div>
          <div className="about_cnt">
            <AboutCnt cnt={navList[this.state.index]['cnt']} />
          </div>        
      </div>
    )
  }
  select(idx){
    this.setState({
      index:idx
    })
  }
}

export default About;