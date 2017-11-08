const ajax = ({
  type = 'POST',
  url = '',
  data = {},
  dataType = 'json',
  async = true,
  contentType = 'application/x-www-form-urlencoded',
  beforeSend = () => {},
  success = (res) => {
    console.log(res)
  },
  error = (err) => {
    console.log(err)
  }
})=>{
  beforeSend();
  var xhr = createxmlHttpRequest();
  xhr.responseType = dataType;
  xhr.open(type, url, async);
  xhr.setRequestHeader("Content-Type", contentType);
  xhr.send(convertData(data));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response)
      } else {
        error()
      }
    }
  }
}

export default ajax;

function createxmlHttpRequest() {
  if (window.ActiveXObject) {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
}

function convertData(data) {
  if (typeof data === 'object') {
    var convertResult = "";
    for (var c in data) {
      convertResult += c + "=" + data[c] + "&";
    }
    convertResult = convertResult.substring(0, convertResult.length - 1)
    return convertResult;
  } else {
    return data;
  }
}

//格式化params参数
// function formatParams(data) {
//   var arr = [];
//   for (var name in data) {
//     arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
//   }
//   arr.push(("v=" + Math.random()).replace(".", ""));
//   return arr.join("&");
// }