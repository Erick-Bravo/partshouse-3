const asyncHandler = require("express-async-handler");

const Feedback = require("../model/feedbackModel");

//@desc     Get Part
//@route    Get /api/part
//@access   Private
const getFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find();

  res.status(200).json(feedback);
});


//@desc     Create Record
//@route    POST /api/record
//@access   Private
const createFeedback = asyncHandler(async (req, res) => {

  const feedback = await Feedback.create({
    email: req.body.email,
    feedback: req.body.feedback,
    iconSuggestion: req.body.iconSuggestion,
  });

  res.status(200).json(feedback);
});

module.exports = {
  getFeedback,
  createFeedback,
};