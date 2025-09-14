const syntax = require("./syntax");
const logical = require("./logical");
const runtime = require("./runtime");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  //syntax();
  //logical();
  runtime();
};

module.exports = requestHandler;
