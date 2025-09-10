const http = require('http')

const server = http.createServer((req, res) => {
  res.write('<html>')
  res.write('<head><title>My Server</title></head>')
  res.write('<body><h1>Hello World from Server!</h1></body>')
  res.write('</html>')
  res.end()
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`)
})