var http=require('http'),
port=8080;
host="127.0.0.1";
var server=http.createServer(function(response))
res.writeHead(200,{"content-Type":"text/plain"});
res.write("helloworld");
res.end();
});
server.listen(port,host,function(){
  console.log("listening.....");
}
