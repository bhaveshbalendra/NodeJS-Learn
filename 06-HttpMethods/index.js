// method of http =>   req.method this will give which type of request we are sending to server this is send by browser request types can be get,post(give data to server like form),put(to upload file or photo in server),patch(to edit the information in the server) ,delete(to delete the info from server)

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`Hi,${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(search);
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") {
          //DB Query
          res.end("Success");
        }
      default:
        res.end("404 Error");
    }
  });
});

myServer.listen(8000, () => console.log("All Right"));
