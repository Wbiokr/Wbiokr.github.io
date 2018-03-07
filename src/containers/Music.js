import {
  connect
} from 'react-redux';

import Music from '../components/screens/Music';

const mapStateToProps=(state)=>(
  {
    music:state.Music
  }
)

const mapDispatchToProps=(dispatch)=>({
  togglePlay(){
    dispatch({type:'MUSIC_TOGGLE'})
  },
  toggleMuted(){
    dispatch({type:'MUTED_TOGGLE'})
  },
  changeVolume(e){
    let t=null;
    if(e.target.nodeName.toLowerCase()==='em'){
      t=e.target.parentNode
    }else if(e.target.nodeName.toLowerCase()==='i'){
      t=e.target
    }
    const oX=e.target.offsetLeft;
    const eX=e.pageX;
    const w=t.offsetWidth;

    const v=(eX-oX)/w

    dispatch({
      type:'CHANGE_VOLUME',
      v
    })

  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Music)