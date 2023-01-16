const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    const read = [];
    fs.readFile("message.text", (err, data) => {
      read.push(data);
      const parsedBody = Buffer.concat(read).toString();
      console.log("hellofromfs", parsedBody);
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        `<body>
        <li> ${parsedBody}  </li>
        <form action="/message" method="POST">
         <input type="text" name="message">
         <button type="submit">Submit</button>
        </form>
        </body>`
      );
      res.write("</html>");
      return res.end();
    });
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedData", parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
});

server.listen(3000);

/*
console.log(req.url, req.method, req.headers)
*/
