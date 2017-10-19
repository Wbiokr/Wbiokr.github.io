const http=require('http');
const url=require('url');
const path=require('path');
const fs=require('fs');
var pn='';
http.createServer((req,res)=>{
    let pathname=url.parse(req.url).pathname;
	console.log(pathname)
	pn=pathname
    if(pathname.indexOf('.')==-1){
        pathname+='/index.html';
    }
    let fileURL='./'+path.normalize('./build/'+pathname);
    let extname=path.extname(pathname);
    fs.readFile(fileURL,(Error,data)=>{
        if(Error){
            res.writeHead(404,{'Content-type':'text/html;charset=UTF8'});
            res.end('404,页面没有找到！')
        }
        getMime(extname,(mime)=>{
            res.writeHead(200,{'Content-type':mime});
            res.end(data);
        })
    })
    
}).listen(8876,'localhost');


function getMime(extname,callback){
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            throw Error('sorry')
        };
        let mimeJson=JSON.parse(data);
        let mimeType=mimeJson[extname]||'text/plain';
        callback(mimeType)
    })
}