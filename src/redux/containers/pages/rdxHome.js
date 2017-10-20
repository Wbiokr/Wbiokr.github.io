import {connect} from 'react-redux';
import {counter,del} from '../../action/action';

import Home from '../../../components/views/homePage.jsx';

const mapStateToProps=(state)=>{
  return(
    {
      num:state.counter.num,
    }
  )
}

const mapDispatchToProps=(dispatch)=>{
  return({
    addClick:()=>dispatch(counter),
    delClick:()=>dispatch(del)
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)