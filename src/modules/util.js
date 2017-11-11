import ajax from './ajax';
import setTitle from './title';
import cookie from './cookie';

const animated=(type,bl)=>(
  bl?`animated infinite ${type}`:`animated ${type}`
)

window.Utils={
    ajax,
    setTitle,
    cookie,
    animated,
  }