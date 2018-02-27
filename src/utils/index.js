
(function(win){
  
  win.setTitle=function (titleMsg) {
    document.title = titleMsg;
    let i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    i.style.display = 'none';
    i.onload = function () {
        setTimeout(function () {
            i.remove();
        }, 9)
    }
    document.body.appendChild(i);
  };

  win.colors={
    blue1:'#35aef8',
    blue2:'#7681ff',
    blue3:'#7681ff',
    balck1:'#070b20',
  }

})(window)