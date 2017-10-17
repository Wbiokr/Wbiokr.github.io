import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import Squre from '../../components/metro/squre.js';
import Oblong from '../../components/metro/oblong.js';
import Column from '../../components/metro/column.js';
import Calender from '../../components/metro/calender.js';

import '../../style\/pages/home.styl';

class Home extends React.Component{
  constructor(props){
    super(props);
    // this.setMinHeight();
    // document.querySelector('.wrapper').style['min-height']=window.config.appHeight+'px';
  }
  componentDidMount(){
    // -Number(document.querySelector('header').style.height)-Number(document.querySelectory('footer'))
    console.log(document.querySelector('header').style.height)
    document.querySelector('main').style['min-height']=window.config.appHeight-this.getHeight('header')-this.getHeight('footer')+'px';
  }
  getHeight(dom){
    return Number(document.querySelector(dom).offsetHeight)
  }
  render(){
    const SqureEle=[1,2,1,2,1,2].map((item,index)=>(
      <Squre iconType='eye-o' iconTxt='第一个' iconTitle='first' itemDelay={index*2.6} key={index} />
    ))
    return(
      <div className='pageHome clearfix'>
        <div className='center'>
          <Column />
        </div>
        <div className='left'>
          <Calender />
        </div>
        <div className='right'>{SqureEle}</div>
      </div>
    )
  }
}

export default Home;
