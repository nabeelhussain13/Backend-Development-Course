const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center>')
    res.write('<h2>Navigation Menu</h2><br>')
    res.write('<a href="/Home" target="_blank">Home</a>&nbsp&nbsp&nbsp&nbsp&nbsp')
    res.write('<a href="/Men" target="_blank">Men</a>&nbsp&nbsp&nbsp&nbsp&nbsp')
    res.write('<a href="/Women" target="_blank">Women</a>&nbsp&nbsp&nbsp&nbsp&nbsp')
    res.write('<a href="/Kids" target="_blank">Kids</a>&nbsp&nbsp&nbsp&nbsp&nbsp')
    res.write('<a href="/Cart" target="_blank">Cart</a>&nbsp&nbsp&nbsp&nbsp&nbsp')
    res.write('</center>')
    return res.end()
  } else if (req.url.toLocaleLowerCase() === '/home') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center><h2>Welcome to Home section.</h2></center>')
    return res.end()
  } else if (req.url.toLocaleLowerCase() === '/men') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center><h2>Welcome to Men\'s section.</h2></center>')
    return res.end()
} else if (req.url.toLocaleLowerCase() === '/women') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center><h2>Welcome to Women\'s section.</h2></center>')
    return res.end()
}else if (req.url.toLocaleLowerCase() === '/kids') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center><h2>Welcome to Kids\' section.</h2></center>')
    return res.end()
}else if (req.url.toLocaleLowerCase() === '/cart') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<center><h2>Welcome to Cart section.</h2></center>')
    return res.end()
} else {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.write('<center><h2>Page does not exist.</h2></center>')
  return res.end()
}}) 

const port = 3000
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`)
})

