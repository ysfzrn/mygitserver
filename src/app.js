"use strict";

const path = require("path");
const serveStatic = require("feathers").static;
const favicon = require("serve-favicon");
const compress = require("compression");
const cors = require("cors");
const feathers = require("feathers");
const configuration = require("feathers-configuration");
const hooks = require("feathers-hooks");
const rest = require("feathers-rest");
const bodyParser = require("body-parser");
const socketio = require("feathers-socketio");
const middleware = require("./middleware");
const services = require("./services");
const handler = require('feathers-errors/handler');


const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads');

const multer = require('multer');
const multipartMiddleware = multer();
const dauria = require('dauria');

const app = feathers();

app.configure(configuration(path.join(__dirname, "..")));

app
  .use(compress())
  .options("*", cors())
  .use(cors())
  .use(favicon(path.join(app.get("public"), "favicon.ico")))
  .use("/", serveStatic(app.get("public")))
  .use("/", serveStatic(app.get("uploads")))
  .use(bodyParser.json({ limit: "50mb" }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware)
  .use(
    "/uploads",
    multipartMiddleware.single("uri"),
    function(req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage })
  )
  .use(handler());

app.service("/uploads").before({
  create: [
    function(hook) {
      if (!hook.data.uri && hook.params.file) {
        const file = hook.params.file;
        const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
        hook.data = { uri: uri };
      }
    }
  ]
});

module.exports = app;
