const mongoose = require("mongoose");

const { DB_NAME, DB_URL } = require("../config/config.js");

const Device = require("../models/deviceSchema");

const connectDb = () => {
  return mongoose.connect(`mongodb://${DB_URL}:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  });
};

const models = { Device };
//export default models;
module.exports = { models, connectDb };
