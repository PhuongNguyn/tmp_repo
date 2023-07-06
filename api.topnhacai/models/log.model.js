const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    action: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    fp: {
      type: Object,
    },
    ip: {
      type: String,
    },
    route: {
      type: String,
    },
    data: {
      type: String,
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
