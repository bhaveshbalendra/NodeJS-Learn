// in url(uniform resource locator) eg(https://www.youtube.com/) we have protocol(https://(Hypertext Transfer Protocol Secure)) domain(www.youtube.com) path/root(/) other paths eg (/about,/contact) nested path(youtube.com/project/1) query parameters (youtube.com/watch?user_id=1&a=2) so here user_id is key and 1 is value and another key value is seperated by & and query parameters starts with ?
// we use url module to url.parse(urlStr, [parseQueryString]) it create object of query parameter because http don't have
//install url module before use (npm i url or npm install url)
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()}: ${req.url} New Request Received\n`;
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (parsedUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end(parsedUrl.query.name);
        break;
      default:
        res.end("404 Error");
    }
  });
});

myServer.listen(8000, () => console.log("All Right"));
