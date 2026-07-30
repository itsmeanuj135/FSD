import {mkdir, rm} from "fs/promises";

 await mkdir('uploads/images', {recursive: true});
// await mkdir('docs/resumes/data', {recursive: true});

// deletes only data folder
// await rm('docs/resumes/data', {recursive: true});
// deletes resumes and docs bothe in recursive call
// await rm('docs', {recursive: true});