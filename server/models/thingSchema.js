const mongoose = require("mongoose");

const ThingSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    require: false,
  },
});

//Make this collection singular later?
const Thing = mongoose.model("Thing", ThingSchema);

module.exports = Thing;
