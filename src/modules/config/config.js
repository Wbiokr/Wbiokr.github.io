window.config={
  apiHeader:'',
  userToken:'',
  appVersion:'',
  userMobile:'',
  isIos:!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid:navigator.userAgent.indexOf('Android') > -1,
  isWeixin:isWeixin(),
  appWidth:getPx('Width'),
  appHeight:getPx('Height'),
};
// alert(121212)
const isBuild=window.location.href.indexOf('https://')===0;
window.config.apiHeader=isBuild?'https://':'http://t';

function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    };
    ua=null;
}

function getPx(type){
    return document.body[`offset${type}`]
}

