const asyncHandler = require("express-async-handler");

const Goals = require("../model/goalModal");

//@desc     Get goals
//@route    Get /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find();

  res.status(200).json(goals);
});

//@desc     Set Goals
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goals.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//@desc     update goals
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goals.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedGoal);
});

//@desc     Delete goals
//@route    Delete /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove()
  res.status(200).json({message: `Goal deleted`, id: req.params.id});
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
