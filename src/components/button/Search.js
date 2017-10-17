import React from 'react';
import Icon from '../icon/icon';



class Search extends React.Component{
  constructor(props){
    super(props)
  }
  seo(){
    
  }
  render(){
    return (
      <div className='headerSearch'>
        <p><input type="text" /><Icon type='metro-patent' /></p>
        <p>
        <Icon type='github' />
        <Icon type='qq' />
        <Icon type='weixin2' />
        <Icon type='dianhua' />
        <Icon type='fenxiang' /></p>
      </div>
    )
  }
}

// const Search = ()=>(
//   <Input />
// )

export default Search ;