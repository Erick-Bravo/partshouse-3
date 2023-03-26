const asyncHandler = require("express-async-handler");

const Part = require("../model/partModel");

//@desc     Get Part
//@route    Get /api/part
//@access   Private
const getParts = asyncHandler(async (req, res) => {
  const parts = await Part.find({ recordId: req.body.recordId });

  res.status(200).json(parts);
});

//@desc     Create Record
//@route    POST /api/record
//@access   Private
const createPart = asyncHandler(async (req, res) => {

  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  const part = await Part.create({
    name: req.body.name,
    recordId: req.body.recordId,
    userId: req.user.id
  });

  res.status(200).json(part);
});

//@desc     Update Record
//@route    PUT /api/record/:id
//@access   Private
const updatePart = asyncHandler(async (req, res) => {
  const part = await Part.findById(req.params.id);

  if (!part) {
    res.status(400);
    throw new Error("Part not found");
  }

  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

  //Make sure the logged in user matches the record user
  // if(part.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error("User not authorized");
  // }

  const updatedPart = await Part.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedPart);
});

//@desc     Delete Part
//@route    Delete /api/part/:id
//@access   Private
const deletePart = asyncHandler(async (req, res) => {
  const part = await Part.findById(req.params.id);

  if (!part) {
    res.status(400);
    throw new Error("part not found");
  }

  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

  //Make sure the logged in user matches the goal user
  // if(part.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error("User not authorized");
  // }

  await part.remove()
  res.status(200).json({message: `Part deleted`, id: req.params.id});
});

module.exports = {
  getParts,
  createPart,
  updatePart,
  deletePart,
};