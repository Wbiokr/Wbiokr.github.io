import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import Squre from '../../components/metro/squre';
import Calender from '../../components/metro/calender';
import Blogs from '../metro/blog';
import './home.styl';

class Home extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  
  render(){
    // const {addClick,delClick,num}=this.props;
    const SqureEle=[1,2,1,2,1,2].map((item,index)=>(
      <Squre iconType='eye-o' iconTxt='第一个' iconTitle='first' itemDelay={index*2.6} key={index} />
    ))
    return(
      <div className='pageHome clearfix'>
        <div className='clearfix'>
          <div className='center'>
            <Blogs />
          </div>
          <div className='left'>
            <Calender />
          </div>
          <div className='right'>{SqureEle}</div>
        </div>
      </div>
    )
  }
}

export default Home;
