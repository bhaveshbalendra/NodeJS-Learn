// const fs = require("fs");

//Sync Blocking task in event queue are send to event loop and event loop execute non blocking and send blocking to the pool threads . this pool thread is limited like 4 thread it depend on your computer use module os to see that.It complicate the matter when we have sync/blocking code using all the thread in the pool thread this mean other have to wait so it advised to use only non-blocking/async code

// console.log(1);
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);
// console.log(2);
// we want 1 then 2 it blocks that we don't want

//Async Non Blocking through call-back
// console.log(1);
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(2);

//os module to see thread pool and your computer details
//Default Thread pool size = 4

// const os = require("os");
// console.log(os.cpus().length);
