const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const url_parts = url.parse(req.url);
  let path = url_parts.pathname;
  if (path === "/") path = "/index.htm";
  fs.readFile(`${__dirname}${path}`, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/html",
        charset: "utf8",
      });
      res.write(
        "<p>Arquivo nao Encotrado!</h1><p><a href='http://localhost:3000/'>Inicio</a></p>"
      );
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log(`Acesse pelo endereço: http://localhost:3000/`);
});
