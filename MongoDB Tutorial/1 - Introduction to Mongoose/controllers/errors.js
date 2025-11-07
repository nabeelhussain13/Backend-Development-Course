exports.get404 = (req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found", currentPage: "404Page" });
};
