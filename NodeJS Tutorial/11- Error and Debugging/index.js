const http = require("http");
const requestHandler = require("./requestHandler");

const server = http.createServer(requestHandler);

const port = 3001;
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
});
