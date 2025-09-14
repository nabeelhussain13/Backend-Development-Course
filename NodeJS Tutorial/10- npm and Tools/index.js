const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
});
