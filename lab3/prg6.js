import { writeFile} from "fs/promises";

for (let i = 1; i <= 1000000; i++) {
    await writeFile("BigFile.txt", `hello there ${i}\n`, { flag: "a" });
}
    
