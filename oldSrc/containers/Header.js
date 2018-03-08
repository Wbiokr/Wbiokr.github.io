import Header from '../components/layout/Header';
import {connect} from 'react-redux';

const mapStateToProp=(state)=>{
  return state.LayoutHeader
};

const mapPropsToState=(dispatch)=>{
  return {
    headerSelectIndex(idx){
      dispatch();
    }
  }
}