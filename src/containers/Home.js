import Home from '../components/screens/Home';

import {
  connect
} from 'react-redux';

const mapStateToProps=(state)=>{
  return {
    state
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    // getData:
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
