import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
	const sourcePath = path.resolve("src/fs/files");
	const destinationPath = path.resolve("src/fs/files_copy");
 
	try {
	  await fs.cp(sourcePath, destinationPath, {
		 force: false,
		 recursive: true,
		 errorOnExist: true,
	  });
	} catch (err) {
	  if (err.code === "ENOENT" || err.code === "ERR_FS_CP_EEXIST") {
		console.error('FS operation failed')
	  }
	}
	
};

await copy();
