const asyncHandler = require("express-async-handler");

const Record = require("../model/recordModel");

//@desc     Get Record
//@route    Get /api/record
//@access   Private
const getRecords = asyncHandler(async (req, res) => {
  const records = await Record.find({ phId: req.body.phId });

  res.status(200).json(records);
});

//@desc     Create Record
//@route    POST /api/record
//@access   Private
const createRecord = asyncHandler(async (req, res) => {

  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  const record = await Record.create({
    name: req.body.name,
    phId: req.body.phId
  });

  res.status(200).json(record);
});

//@desc     Update Record
//@route    PUT /api/record/:id
//@access   Private
const updateRecord = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id);

  if (!record) {
    res.status(400);
    throw new Error("Record not found");
  }

  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

  //Make sure the logged in user matches the record user
  // if(record.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error("User not authorized");
  // }

  const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedRecord);
});

//@desc     Delete Record
//@route    Delete /api/record/:id
//@access   Private
const deleteRecord = asyncHandler(async (req, res) => {
  const record = await Record.findById(req.params.id);

  if (!record) {
    res.status(400);
    throw new Error("Record not found");
  }

  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

   //Make sure the logged in user matches the goal user
  // if(record.user.toString() !== req.user.id) {
  //   res.status(401)
  //   throw new Error("User not authorized");
  // }

  await record.remove()
  res.status(200).json({message: `Record deleted`, id: req.params.id});
});

module.exports = {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
};