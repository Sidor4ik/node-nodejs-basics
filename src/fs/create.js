const create = async () => {
	let text = "I am fresh and young";
	
	fs.writeFile("fresh.txt", text, (Eror) => {
		if (Eror)
		  console.log('FS operation failed ');
	 });
};

await create();