import http from "http";

const server = http.createServer((req, res) => {
    res.end("<h2 style='color: red;'>Welcome to the Server</h2>");
});

server.listen(5000, ()=> {
    console.log("Server is running");
});