import About from '../components/views/aboutPage';
import {connect} from 'react-redux';
import {AboutAction} from '../redux/action/';


const mapStateToProps=(state)=>{
  return state.PageAbout
}

const mapPropsToState=(dispatch)=>{
  return {
    changeIndex:(index)=>dispatch(AboutAction(index))
  }
};

export default connect(mapStateToProps,mapPropsToState)(About);