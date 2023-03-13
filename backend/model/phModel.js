const mongoose = require("mongoose");

const PHSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the name"],
      unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Partshouse", PHSchema);