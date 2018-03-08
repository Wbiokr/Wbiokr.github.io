import Movie from '../components/screens/Author'

import {connect} from 'react-redux'

const mapStateToProps=(state)=>(
  {
    movie:state
  }
)

export default connect(mapStateToProps)(Movie)