import ajax from './ajax';
import setTitle from './title';
import cookie from './cookie';

(function(win){
  win.Utils={
    ajax,
    setTitle,
    cookie,
  }
})(window)