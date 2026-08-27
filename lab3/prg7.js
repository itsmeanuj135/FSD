import http from 'http';
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
    res.write("Loading....");
    const text = await readFile("BigFile.txt");
    console.log('Welcome To Server');
    res.end(text);
});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
