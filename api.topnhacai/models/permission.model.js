const mongoose = require("mongoose");

const userPermissionSchema = new mongoose.Schema(
  {
    role: {
      type: mongoose.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    add: {
      type: Boolean,
      default: false,
    },
    view: {
      type: Boolean,
      default: false,
    },
    edit: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("permissions", userPermissionSchema);
