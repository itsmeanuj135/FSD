import http from "http"

const server = http.createServer((req,res)=>{
    // res.write("<h1>hello buddy!</h1>");
    if(req.url === '/' && req.method === 'GET'){
        res.end("Home Page");
    }else if(req.url === "/product" && req.method === "GET"){
        const products = [
            {
                id:1,
                name:'mobile',
                price:'2000',
            },
            {
                id : 2,
                name : 'laptop',
                price : '20000',
            },
        ];

        res.end(JSON.stringify(products));

    }else if(req.url === "/product" && req.method === "POST"){
        // retrieve data from  client 
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        });

        req.on("end",()=>{
            const product = JSON.parse(body)
            // add data to database
            res.writeHead(201, {
                "content-type":'application/json',

            });
            // send back the status
            res.end(
                JSON.stringify({
                    msg:'product added',
                    product,
                }),
            );
        });
        
    }else if(req.url === '/product' && req.method === "PUT"){
        res.end("Update Product");
    }else if(req.url === '/product' && req.method === "DELETE"){
        res.end("Remove product");
    }else{
        res.statusCode = 404;
        res.end("Not found")
    }
});

server.listen(3000, ()=>{
    console.log("server for prg12 at 3000");
})