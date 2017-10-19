const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
var pn='';
const hostLocal='localhost';
const hostIpv4=require('ipv4');
const port=8876;

http.createServer((req,res)=>{
    let pathname=url.parse(req.url).pathname;
    if(pathname.indexOf('.')==-1){
        pathname+='/index.html';
    }
    let fileURL='./'+path.normalize('./build/'+pathname);
    // let fileURL='./index.html';
    console.log('地址为:'+fileURL)
    // if(fileURL)
    let extname=path.extname(pathname);
    fs.readFile(fileURL,(Error,data)=>{
        if(Error){
            res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
            res.end('404,资源没有找到！')
        }
        getMime(extname,(mime)=>{
            res.writeHead(200,{'Content-type':mime});
            res.end(data);
        })
    })
    
}).listen(port,hostLocal);

console.log(`we are listening:${hostLocal}:${port}`)

http.createServer((req,res)=>{
  let pathname=url.parse(req.url).pathname;
  if(pathname.indexOf('.')==-1){
      pathname+='/index.html';
  }
  let fileURL='./'+path.normalize('./build/'+pathname);
  // let fileURL='./index.html';
  console.log('地址为:'+fileURL)
  // if(fileURL)
  let extname=path.extname(pathname);
  fs.readFile(fileURL,(Error,data)=>{
      if(Error){
          res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
          res.end('404,资源没有找到！')
      }
      getMime(extname,(mime)=>{
          res.writeHead(200,{'Content-type':mime});
          res.end(data);
      })
  })
}).listen(port,hostIpv4);
console.log(`You can also access us by IP:${hostIpv4}:${port}`)


function getMime(extname,callback){
    fs.readFile('./config/mime.json',(err,data)=>{
        if(err){
            throw Error('sorry')
        };
        let mimeJson=JSON.parse(data);
        let mimeType=mimeJson[extname]||'text/plain';
        callback(mimeType)
    })
}