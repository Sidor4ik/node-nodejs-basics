import fs from "node:fs";
import path from "node:path"

const create = async () => {
const fileText = "I am fresh and young";
const fileName = "fresh.txt";
const dirPath = "src/fs/files";

const filePath = path.join(dirPath, fileName);

fs.writeFile(filePath, fileText, { flag: 'wx' }, (err) => {
   if(err){console.error('FS operation failed')}
  })
}
await create();