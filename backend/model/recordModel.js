const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
    },
    phId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Partshouse"
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Record", recordSchema);