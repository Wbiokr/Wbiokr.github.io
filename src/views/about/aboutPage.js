import React from 'react';
import {Switch,Route} from 'react-router-dom';

const about1=()=>(
  <div>about1</div>
)

const about2=(props)=>{
  const matchObj=props.match;
  console.log(matchObj)
  console.log(props)
  return(

    <div>about2222222221</div>
  )
}
// )

class About extends React.Component{
  render(){
    return(
      <div>
        about
        <Switch>
          <Route exact path='/about' component={about1} />
          <Route  path='/about/:number' component={about2} />
        </Switch>
      </div>
    )
  }
}

export default About;