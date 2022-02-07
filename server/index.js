//build out an express server to support client viewing of logs
require("dotenv").config();
const { APPLICATION_NAME, RUN_SCHEDULED_JOBS, JOB_ONE_INTERVAL } = require("./config/config.js");

//our winston instance
const { logger } = require("./util/logger");
//our express server and io server
const { server, io } = require("./server");
//Mongo
const { connectDb } = require("./services/mongooseService");

//scheduled job settings
const schedule = require("node-schedule");
const { scheduledJobOne } = require("./services/scheduledJobService.js");

logger.info(`${APPLICATION_NAME} Starting in ${process.env.NODE_ENV} mode`);

//Once connect launch our server
connectDb().then(async () => {
  logger.info(`${APPLICATION_NAME} Connected to Mongo`);

  const port = process.env.PORT || 3000;
  server.listen(port);

  const events = require("events");
  const em = new events.EventEmitter();

  require("./routes/socket")(io, em);

  if (RUN_SCHEDULED_JOBS == true) {
    const jobOne = schedule.scheduleJob(JOB_ONE_INTERVAL, scheduledJobOne);
  }

  logger.info(`${APPLICATION_NAME} is running on port: ${port}`);
});
