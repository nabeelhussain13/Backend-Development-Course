const http = require('http')

const server = http.createServer((req, res) => {
  console.log("Server has created successfully!")
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
})