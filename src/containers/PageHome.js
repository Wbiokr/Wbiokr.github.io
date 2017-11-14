import Home from '../components/views/homePage';

import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
  return state.PageHome
}
const mapPropsToState=({dispatch})=>{
  return {
    handle1:()=>dispatch()
  }
}

export default connect(mapStateToProps,mapPropsToState)(Home);