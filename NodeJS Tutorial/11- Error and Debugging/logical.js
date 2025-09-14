const logical = () => {
  let x = 5;
  if ((x = 10)) {
    console.log("Value of x is 10");
  } else {
    console.log("Value of x is not 10");
  }
};

module.exports = logical;
