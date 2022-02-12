const winston = require("winston");
const colorizer = winston.format.colorize();

//define debug level default or pull from node_env
let debugLevel = "info";
if (process.env.NODE_DEBUG) debugLevel = process.env.NODE_DEBUG;

const logger = winston.createLogger({
  level: debugLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.printf((msg) => colorizer.colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`))
  ),
  transports: [new winston.transports.Console()],
});

module.exports = { logger };
