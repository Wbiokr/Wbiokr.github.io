import React from 'react';
import '../../icon/iconfont.css';
import PropTypes from 'prop-types';

class Icon extends React.Component{
  render(){
    const {type,className}=this.props;
    return(
      <i className={`icon iconfont icon-${type} ${className}` }></i>
    )
  }
}

Icon.propTypes={
  type:PropTypes.string.isRequired,
  // default:
}

export default Icon ;

