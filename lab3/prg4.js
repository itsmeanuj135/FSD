import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Welcome To Server');

   if (req.url==='/product')
    {
    res.end('<h1>Product Page</h1>')
   }
   else if (req.url==='/cart'){
    res.end ('<h2>Cart page </h2>')
   }
   else if (req.url==='/checkout'){
       res.end('<h1>Checkout Page</h1>')

        
    }
     else res.end("<h1>404, Not found</h1>")
});
server.listen(2500, ()=>{
        console.log('Server is running.....');
});