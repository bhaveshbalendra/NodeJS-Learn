// const fs = require("fs");

//Sync and Blocking

//write
// fs.writeFileSync("./test.txt", "Hey There");

//read
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//Async and Non-Blocking Most used

//write
// write don't return
// fs.writeFile("./test.txt", "Hello WOrld Async", (err) => {
//   console.log(err);
// });

//read readFile don't return
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// all above overwrites the file we want to add to the existing file
// fs.appendFileSync("./contacts.txt", "this is the appended number 75871\n");

// copy file
// fs.cpSync("./contacts.txt", "./copy.txt");

//delete file
// fs.unlinkSync("./copy.txt");

//see stats details
// console.log(fs.statSync("./test.txt").isFile());

// make directory
// fs.mkdirSync("mydocs");
// fs.mkdirSync("myfile/a/b", { recursive: true });
