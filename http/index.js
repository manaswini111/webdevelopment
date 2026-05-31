const http=require('http');
const server=http.createServer(function(req,res){
   // console.log(req.headers);
    //console.log(req.method);
    //console.log(req.url);
    //console.log(req.body);
    res.writeHead(200);
    //switch(req.url) {
       // case '/about':
           // res.writeHead(200);
           // return res.end("This is about page");
        //case '/contact':
            //res.writeHead(200);
            //return res.end("This is contact page");
            //default:
            //res.writeHead(404);
           // return res.end("Page not found");
    // }
    res.end(`${req.headers['accept-language']}, ${JSON.stringify(req.headers)}, ${req.method}, ${req.url}, ${JSON.stringify(req.body)}`);
});
server.listen(8000,()=>console.log(`Server is running on port 8000`));