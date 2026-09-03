import http from 'http';
 const server = http.createServer((req,res)=>{
    if (req.url==="/" && req.method==="GET") {
        res.end("home page")
    }
    else if (req.url==="/product" && req.method==="GET") {
        res.end("show product")
    }
    else if (req.url==="/product" && req.method==="POST") {
        res.end("add product")
    }
    else if (req.url==="/product" && req.method==="PUT") {
        res.end("update product")
    }
    else if (req.url==="/product" && req.method==="DELETE") {
        res.end("remove product")
    }


 });



 server.listen(3000,()=>{
    console.log("Prg 12 is Running at 3000");
});