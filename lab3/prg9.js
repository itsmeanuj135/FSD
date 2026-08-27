import http from "http";
import { createReadStream } from "fs";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
  console.log("Hit server");
  if (req.url === "/stream") {
    const stream = createReadStream("BigFile.txt", { encoding: "utf-8" });
    stream.pipe(res);
  } else if (req.url === "/product2.html") {
    res.setHeader("content-type", "text/html");
    res.statusCode = 200;
    const data = createReadStream("product2.html");
    data.pipe(res);
  } else if (req.url === "/product") {
    res.setHeader("content-type", "text/html");
    res.statusCode = 200;
    const data = createReadStream("product.html");
    data.pipe(res);
  } else {
    res.end("<h1>Home page</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
