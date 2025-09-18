const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy middleware", req.url, req.method);
  next();
});

/*
app.use((req, res, next) => {
  console.log("Third middleware");
  res.send('<h1>You are getting this response from Server</h1>')
});

*/

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to Home page.</h1>");
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <form action="contact-us" method="POST">
      <input type="text" name="username" placeholder="Enter your name">
      <input type="email" name="email" placeholder="Enter your email">
      <button type="submit">Submit Form</button>
    </form>`);
});

app.post("/contact-us", (req, res, next) => {
  res.send("<h1>Thanks for filling this form.</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening at address http://localhost:${PORT}`);
});
