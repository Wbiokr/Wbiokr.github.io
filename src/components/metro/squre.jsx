import React from 'react';
import '../../style/metro/squre.styl';
// import {Icon} from 'antd';
import Icon from '../icon/icon';

class Squre extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    // console.log(this.props.itemDelay)
    return(
      <div className='squre' style={{animationDelay:`${this.props.itemDelay}s`}}>
        <div className='squreIcon'>
          <p className='iconTitle'>{this.props.iconTitle}</p>
          <Icon type="music" />
        </div>
        <div className='squreTxt'>
          {this.props.iconTxt}
        </div>
      </div>
    )
  }
}

export default Squre ;