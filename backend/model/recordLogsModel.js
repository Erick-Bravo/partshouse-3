const mongoose = require("mongoose");

const recordLogsSchema = mongoose.Schema(
  {
    log: {
      type: String,
      required: [true, "Add a log"],
    },
    recordId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Record"
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Record_Logs", recordLogsSchema);