import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(404,{
        'content-type':'text/plain',
    });
    res.end("<h1>Welcome To Server");
});
server.listen(2000, ()=>{
     console.log('Server is running.....');
});