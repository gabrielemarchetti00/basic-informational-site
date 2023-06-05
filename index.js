let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  if (filename == "./") {
    filename = "./index.html";
  }
  else if (filename == "./about") {
    filename = "./about.html";
  }
  else if (filename == "./contact-me") {
    filename = "./contact-me.html"
  }
  else {
    filename = "./404.html"
  }
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);