const http=require("http");
const server=http.createServer(function(req,res){
    console.log("hello request succeeded");
    res.writeHead(200);
    //res.end("thanks for your request");
});
server.listen(5000,function(){
    console.log("hello this is manaswini request ");
})
