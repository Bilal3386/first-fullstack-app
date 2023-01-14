const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome Home!</h1></body>");
    res.write("</html>");
    res.end();
  }

  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to  About Us page</h1></body>");
    res.write("</html>");
    res.end();
  }
  
});

server.listen(3000);

/*
console.log(req.url, req.method, req.headers)
*/
