import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "application/json"});
const product = {
    name: "Mobile Phone",
    price: 25000,
    discount: "5%",
    company: "Samsung",
};
res.end(JSON.stringify(product));

});
server.listen(2500, ()=>{
        console.log("Server is running.....");
});