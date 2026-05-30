const http=reqire('http');
const server=http.createServer(function(req,res){});
server.listen(8000,()=>console.log(`Server is running on port 8000`));