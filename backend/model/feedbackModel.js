const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    feedback: {
      type: String,
    },
    iconSuggestion: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Feedback", feedbackSchema);