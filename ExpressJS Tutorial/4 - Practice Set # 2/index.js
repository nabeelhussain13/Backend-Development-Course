//Core modules
const path = require('path');
//External modules
const express = require("express");
//Local modules
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");
const rootDir = require('./utils/pathUtil');

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening at address http://localhost:${PORT}`);
});
