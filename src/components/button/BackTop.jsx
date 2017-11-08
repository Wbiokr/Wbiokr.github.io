import React from 'react';


import './backtop.styl';

class Backtop extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className='backtop'>
            <div className='backTopTxt'>UP</div>
        </div>
      </div>
    )
  }
}

export default Backtop ;