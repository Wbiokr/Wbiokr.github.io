import {
  connect
} from 'react-redux';

import Music from '../components/screens/Music';

const mapStateToProps=(state)=>(
  {
    music:state.Music
  }
)


export default connect(mapStateToProps)(Music)