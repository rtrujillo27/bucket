require('dotenv').config()
const cors = require("cors");
const express = require("express");
const app = express();

let corsOptions = {
  origin: "http://localhost:4880",
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
const port = process.env.PORT ? process.env.PORT : 47305;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
