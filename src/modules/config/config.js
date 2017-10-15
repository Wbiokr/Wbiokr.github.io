window.config={
  apiHeader:'',
  userToken:'',
  appVersion:'',
  userMobile:'',
  isIos:!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  isAndroid:navigator.userAgent.indexOf('Android') > -1,
  isWeixin:isWeixin(),
};
// alert(121212)
const isBuild=location.href.indexOf('https://')===0;
config.apiHeader=isBuild?'https://':'http://t';

function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    };
    ua=null;
}

