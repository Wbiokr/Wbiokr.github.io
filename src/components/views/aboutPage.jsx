import React from 'react';
import './about.styl';
import {Switch,Route} from 'react-router-dom';

const about1=()=>(
  <div>about1</div>
)

const about2=(props)=>{
  const matchObj=props.match;
  return(
    <div>about2222222221</div>
  )
}
// )
        // <Switch>
        //   <Route exact path='/about' component={about1} />
        //   <Route  path='/about/:number' component={about2} />
        // </Switch>

class About extends React.Component{
  render(){
    return(
      <div className='page_about'>
        
      </div>
    )
  }
}

export default About;