import React from 'react';
import '../../icon/iconfont.css';

class Icon extends React.Component{
  render(){
    return(
      <i className={`icon iconfont icon-${this.props.type}`}></i>
    )
  }
}

export default Icon ;