const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>User Details Form</h1>");
    res.write('<form action="/user-detail" method="POST">');
    res.write(
      '<input type="text" placeholder="Enter your name", name="username">'
    );
    res.write(
      '<br><br><input type="number" placeholder="Enter your age", name="age"><br><br>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<br><br><input type="submit" value="Submit">');
    res.write("</form>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/user-detail" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      console.log(params);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile("userDetails.txt", JSON.stringify(bodyObject), (error) => {
        console.log("Data written successfully!");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
});
