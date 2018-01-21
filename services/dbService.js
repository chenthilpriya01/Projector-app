var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://chenthil:goodday1@ds111138.mlab.com:11138/projector100").then(function(client){
    console.log("connected to mongo");
    exports.database=client.db("projector100");
  });
}
