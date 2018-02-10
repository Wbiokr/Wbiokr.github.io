import React from 'react';
import PropTypes from 'prop-types';
import './about.styl';
// import {Switch,Route} from 'react-router-dom';

const AboutNavItem=({name,label,handleIdx})=>{
  return <li key={name} className={label} onClick={handleIdx}>{name}</li>
}

const AboutCnt=({cnt})=>(
  <div>{cnt}</div>
)

// 仅仅单纯用于ui渲染，所有的数据与逻辑来自于属性props传递
class About extends React.Component{
  render(){
    const {index,navList}=this.props;
    return(
      <div className='page_about'>
          <div className="about_nav">
            <ul>
              {
                navList.map((item,idx)=>(
                  <AboutNavItem handleIdx={this.select.bind(this,idx)} name={item.name} key={idx} label={idx===index?'current':''}/>
                ))
              }
            </ul>
          </div>
          <div className="about_cnt">
            <AboutCnt cnt={navList[index]['cnt']} />
          </div>        
      </div>
    )
  }
  select(idx){
   this.props.changeIndex(idx)
  }
}

About.propTypes={
  navList:PropTypes.array.isRequired,
  index:PropTypes.number.isRequired
}

export default About;