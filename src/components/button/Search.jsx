import React from 'react';
import Icon from '../icon/icon';



class Search extends React.Component{
  render(){
    return (
      <div className='headerSearch'>
        <p><input type="text" placeholder='搜索，可能没结果...'/><Icon type='metro-patent' /></p>
        <p>
        <Icon type='github' className='i-h-10'/>
        <Icon type='qq' className='i-h-10'/>
        <Icon type='weixin2' className='i-h-10'/>
        <Icon type='dianhua' className='i-h-10'/>
        <Icon type='fenxiang' className='i-h-10'/></p>
      </div>
    )
  }
}

export default Search ;