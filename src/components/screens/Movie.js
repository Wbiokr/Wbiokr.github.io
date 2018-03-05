import React from 'react'

import cxs from 'cxs'

export default class Movie extends React.Component{
  render(){
    return(
      <div className={`page-movie ${rule}`}>

      </div>
    )
  }
}

const rule=cxs({
  height:'100%',
  width:'100%',
  background:'#f00',
})