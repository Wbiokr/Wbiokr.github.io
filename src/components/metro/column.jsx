import React from 'react';
import {connect} from 'react-redux';
import '../../style/metro/column.styl';

import {counter,del} from '../../redux/action/action.js';

class Column extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {num,addClick,delClick,text}=this.props
    alert(JSON.stringify(this.props))
    return(
      <div className='column'>
        <button onClick={addClick}>+++</button><br />
        <button onClick={delClick}>---------</button>
        <p>{num}</p>
        <h3>{text}</h3>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  // alert(JSON.stringify(state))
  return{
    num:state.counter.num,
    text:state.counter.text
  }
}

const mapDispatchToProps=(dispatch)=>{
  // alert()
  return{
    addClick:()=>dispatch(counter),
    delClick:()=>dispatch(del)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Column);