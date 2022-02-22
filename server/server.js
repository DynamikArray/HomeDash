//build out an express server to support client viewing of logs
const path = require("path");
const serveStatic = require("serve-static");
const morgan = require("morgan");
const history = require("connect-history-api-fallback");

const bodyParser = require("body-parser");

//our winston instance
const { logger } = require("./util/logger");

//App and Logger
const app = require("express")();

//rtsp relay
const { proxy, scriptUrl } = require("rtsp-relay")(app);

const handler = proxy({
  url: `rtsp://192.168.0.1:7441`,
  // if your RTSP stream need credentials, include them in the URL as above
  verbose: false,
});
app.ws("/api/stream", handler);

//Assign middlewares and plugins
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("common"));

//Http and Socket Servers
const server = require("http").createServer(app);
const io = require("socket.io")(server, { serveClient: false });

//Mongo
const { models, connectDb } = require("./services/mongooseService");

app.get("/api/scriptUrl", (req, res) =>
  res.send(`
  <canvas id='canvas'></canvas>

  <script src='${scriptUrl}'></script>
  <script>
    loadPlayer({
      url: 'ws://' + location.host + '/api/stream',
      canvas: document.getElementById('canvas')
    });
  </script>
`)
);

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
