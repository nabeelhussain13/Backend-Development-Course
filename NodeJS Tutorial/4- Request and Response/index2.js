const http = require('http')

const server = http.createServer((req, res) => {
  console.log('URL: ', req.url) //URL
  console.log('Headers: ', req.headers) //Headers --> data about data
  console.log('Method: ', req.method) //Method --> GET, POST, PUT, DELETE
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`)
})