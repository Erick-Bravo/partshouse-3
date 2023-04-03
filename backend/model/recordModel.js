const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    type: {
      type: String,
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
    icon: {
      type: String,
      required: [true, "Please select an icon"],
    },
    description: {
      type: String,
    },
    phId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Partshouse"
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


module.exports = mongoose.model("Record", recordSchema);