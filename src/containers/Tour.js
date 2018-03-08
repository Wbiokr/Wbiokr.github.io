import Movie from '../components/screens/Tour'

import {connect} from 'react-redux'

const mapStateToProps=(state)=>(
  {
    movie:state
  }
)

export default connect(mapStateToProps)(Movie)