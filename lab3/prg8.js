import http from 'http';
import { createReadStream } from "fs";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
    if (req.url === "/stream") {
const stream = createReadStream("BigFile.txt", {encoding: "utf-8"});
    stream.pipe(res);
    }
    else if (req.url === "/normal") {
        res.write("Loading....");
        const text = await readFile("BigFile.txt");
        res.end(text);
    }

});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
