//build out an express server to support client viewing of logs
const path = require("path");
const serveStatic = require("serve-static");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");

//our winston instance
const { logger } = require("./util/logger");

//App and Logger
const app = require("express")();
app.use(morgan("common"));

//Http and Socket Servers
const server = require("http").createServer(app);
const io = require("socket.io")(server, { serveClient: false });

//Mongo
const { models, connectDb } = require("./services/mongooseService");

//Router
const router = require("./routes/router.js");
app.use(router);
app.use(
  history({
    verbose: true,
    index: "/client/dist/index.html",
  })
);
router.use("/", serveStatic(path.join(__dirname, "../client/dist")));
router.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

module.exports = { server, io };
