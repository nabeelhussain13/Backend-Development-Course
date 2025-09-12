const http = require('http')
const fs = require('fs')
const requestHandler = require('./requestHandler');

const server = http.createServer(requestHandler);

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`)
})