const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const {checkRootLogin} = require("../middleware/Auth")

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router,checkRootLogin);
};

module.exports = routes;
