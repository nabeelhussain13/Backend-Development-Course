//Core modules
const path = require('path');
//External modules
const express = require('express');
//Local modules
const contactRouter = express.Router();
const rootDir = require('../utils/pathUtil');

contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'form.html'));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'formResponse.html'));
});

module.exports = contactRouter;