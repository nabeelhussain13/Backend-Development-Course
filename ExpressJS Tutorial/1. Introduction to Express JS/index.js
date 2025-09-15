//External modules
const express = require("express");

const app = express();

//Middlewares without routes

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from first middleware");
  next();
});

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from second middleware");
  next();
});

app.use((req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from third middleware");
  res.send("Welcome to Express JS!");
});

//Middleware with routes

/* 
app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from first middleware");
  next();
});

app.use("/cart", (req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from second middleware");
  res.send("Please, Checkout your cart items!");
});

app.use("/products", (req, res, next) => {
  console.log(req.url, req.method);
  console.log("Came from third middleware");
  next();
}); */

//Middlewares with HTTP methods (get, post)

/*
app.get("/", (req, res, next) => {
  console.log("Came from first middleware");
  next();
});

app.get("/", (req, res, next) => {
  console.log("Came from second middleware");
  next();
});

app.get("/posts", (req, res, next) => {
  console.log("Came from third middleware");
  next();
});

app.post("/submit-form", (req, res, next) => {
  console.log("Came from forth middleware");
  res.send("Your form has been submitted.");
}); */

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening at address http://localhost:${port}`);
});
