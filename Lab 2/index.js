import { writeFile, readFile, appendFile } from 'fs/promises';

await writeFile('stud.txt', "Anuj\ntyping this during classes");
console.log("File written");

const data = await readFile("stud.txt", "utf-8");
console.log(`file contents: ${data}`);

const addContent = async (fname, content) =>{
    await writeFile(fname, content);
    console.log(`${content} written in file: ${fname} `);
}
const readContent = async (fname) =>{
    const data = await readFile(fname, "utf-8");
    return data;
}
const appendData = async (fname, content) =>{
    await appendFile(fname, "\n"+content)
    console.log("data appended");
}


await addContent("notes.txt", "FS is easy in js");
await appendData("notes.txt", await "and I am learning this in my sem 3 class");
console.log("Contents : ", await readContent("notes.txt"));