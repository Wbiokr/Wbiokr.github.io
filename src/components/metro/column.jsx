import React from 'react';
import {connect} from 'react-redux';
import '../../style/metro/column.styl';

import {counter,del} from '../../redux/action/action.js';

class Column extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {addClick,delClick,num}=this.props
 
    return(
      <div className='column'>
        <button onClick={addClick}>+++</button><br />
        <button onClick={delClick}>---------</button>
        <p>{num}</p>
      
      </div>
    )
  }
}
export default Column;
