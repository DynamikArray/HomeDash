const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema(
  {
    device: {
      attributes: {
        type: Object,
        require: true,
      },
      capabilities: {
        type: Array,
        require: true,
      },
      commands: {
        type: Array,
        require: true,
      },
      date: {
        type: String,
        require: false,
      },
      id: {
        type: String,
        require: true,
      },
      label: {
        type: String,
        require: true,
      },
      manufacturer: {
        type: String,
        require: false,
      },
      model: {
        type: String,
        require: false,
      },
      name: {
        type: String,
        require: true,
      },
      type: {
        type: String,
        require: true,
      },
    },
  },
  { timestamps: true }
);

//Make this collection singular later?
const Device = mongoose.model("Device", DeviceSchema);

module.exports = Device;
