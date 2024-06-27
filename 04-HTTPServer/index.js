// node when we write in script node index shortcut use npm start
// always restart the server when add new line of code in createServer don't worries because it give two call as one is the extra call made by browser to fav icon
// So createServer has call back it response when we in the browser and enter the localhost:8000 it runs the code inside the createServer() we can run multiple time as we again and again enter the same link entering in browser
//req has all info about the request
//res.end() this show the text in the page
const http = require("http");

const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url}New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is Home Page");
        break;
      case "/about":
        res.end("About");
        break;
      case "contact":
        res.end("Contact");
        break;
      default:
        res.end("Default");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started!"));
