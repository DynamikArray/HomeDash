const mongoose = require("mongoose");
const { logger } = require("../util/logger");

const { DB_NAME, DB_URL } = require("../config/config.js");

const Things = require("../models/thingSchema");

const connectDb = () => { 
  return mongoose.connect(`mongodb://${DB_URL}:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  });
};

const models = { Things };
//export default models;
module.exports = { models, connectDb };
