//RENAME MORE ACCORDING TO SOMETHING LIKE SETTINGS?

//Default Config
let config = {
  APPLICATION_NAME: "Sample Application API Server",
  DB_NAME: "HomeDash",
  DB_URL: "localhost",
  RUN_SCHEDULED_JOBS: false,
  JOB_ONE_INTERVAL: "*/1 * * * *",
};

//Production Overrides
if (process.env.NODE_ENV == "production") {
  config = {
    ...config,
    DB_URL: "host.docker.internal",
    RUN_SCHEDULED_JOBS: true,
    JOB_ONE_INTERVAL: "*/15 * * * *",
  };
}

module.exports = config;
