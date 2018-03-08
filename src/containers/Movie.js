import Movie from '../components/screens/Movie'

import {connect} from 'react-redux'

const mapStateToProps=(state)=>(
  {
    movie:state
  }
)

export default connect(mapStateToProps)(Movie)