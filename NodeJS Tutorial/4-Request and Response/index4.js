const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<html>')
    res.write('<head><title>My Server</title></head>')
    res.write('<body><h1>You are at Home page</h1></body>')
    res.write('</html>')
    return res.end()
  } else if (req.url === '/products') {
    res.write('<html>')
    res.write('<head><title>My Server</title></head>')
    res.write('<body><h1>You are at Products page</h1></body>')
    res.write('</html>')
    return res.end()
  }
  res.write('<html>')
  res.write('<head><title>My Server</title></head>')
  res.write('<body><h1>404: Page not found</h1></body>')
  res.write('</html>')
  res.end()
})

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`)
})