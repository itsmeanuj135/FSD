import http from "http";

const server = http.createServer((req, res) => {
    console.log('Welcome to Node JS');
    console.log(req.url);
    console.log("Request Method:");

    console.log(req.method);
     console.log("Request Header");
     console.log(req.headers);
     console.log("Socket Info");
    // console.log(req.socket);
    console.log(req.headers.host);
    res.end("Hello");

});
server.listen(3000, () => {
    console.log('Server is running.....');
});