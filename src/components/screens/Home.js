import React from 'react';

import cxs from 'cxs' 

import {Link} from 'react-router-dom'


export default class Home extends React.Component{
  render(){
    return(
      <div className={`page-home ${rule}`}>
          <Link to='/music'>music</Link>
      </div>
    )
  }
}

const rule=cxs({
  height:'100%',
  background:'linear-gradient(120deg, #155799, #159957)'
})