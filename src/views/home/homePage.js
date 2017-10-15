import React from 'react';
import {Switch,Route} from 'react-router-dom';

const Home1=()=>(
  <div>HOME1</div>
)

const Home2=(props)=>{
  const matchObj=props.match;
  console.log(matchObj)
  console.log(props)
  return(

    <div>HOME2222222221</div>
  )
}
// )

class Home extends React.Component{
  render(){
    return(
      <div>
        home
        <Switch>
          <Route exact path='/' component={Home1} />
          <Route  path='/home/:number' component={Home2} />
        </Switch>
      </div>
    )
  }
}

export default Home;