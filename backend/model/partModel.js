const mongoose = require("mongoose");

const partSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    serial: {
      type: String,
    },
    reBuyURL: {
      type: String,
    },
    description: {
      type: String,
    },
    recordId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Record"
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Part", partSchema);