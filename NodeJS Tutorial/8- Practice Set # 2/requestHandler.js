const http = require("http");
const add = require("./add");

const requestHandler = (req, res) => {
  if (req.url.toLowerCase() === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <body>
        <center>
          <h1>Welcome to NodeJS Calculator!</h1>
          <h3><a href="/calculator" target="_blank">Use Calculator</a></h3>
        </center>
      </body>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <body>
        <center>
          <form action="/calculator-result" method="POST">
            <input type="number" placeholder="Enter first number:" name="num1">
            <br><br>
            <input type="number" placeholder="Enter second number:" name="num2">
            <br><br>
            <button type="submit">Calculate Sum</button>
          </form>
        </center>
      </body>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      //console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      //console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      //console.log(bodyObject);
      const num1 = Number(bodyObject.num1);
      const num2 = Number(bodyObject.num2);
      const result = add(num1, num2);
      //console.log(result);
      res.setHeader("Content-Type", "text/html");
      res.write(`
        <body>
          <center>
            <h1>Sum = ${result}</h1>
          </center>
        </body>`);
      return res.end();
    });
  }
};

module.exports = requestHandler;
