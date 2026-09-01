import http from "http"
import { createReadStream } from "fs";

const server = http.createServer((req,res)=>{
    // res.end("<h1>Hello Client, How are you?</h1>")
    if(req.url == "/"){
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        const stream = createReadStream('./pages/airtag.html', {encoding: "utf-8",});
        stream.pipe(res);
    }else if(req.url === "/mobile"){
        res.writeHead(200, {"content-type": "text/json"});
        const stream = createReadStream('./data/products.json', {encoding: "utf-8",});
        stream.pipe(res);
    }else if(req.url === "/manual"){
        res.writeHead(200, {"content-type": "text/plain"});
        const stream = createReadStream('./data/chatgpt.txt', {encoding: "utf-8",});
        stream.pipe(res);
    }else{
    res.statusCode = 404;
    res.end("Not found")
    }
});

server.listen(3000,()=>{
    console.log("Server running at 3000 for prg10");
});