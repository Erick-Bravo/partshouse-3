const asyncHandler = require("express-async-handler");

const Record = require("../model/recordModel");

//@desc     Get Record
//@route    Get /api/record
//@access   Private
const getRecord = asyncHandler(async (req, res) => {
  const record = await Record.find({ phId: req.ph.id });

  res.status(200).json(record);
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
    phId: req.ph.id
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
  if(record.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized");
  }

  const updatedPH = await PH.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedPH);
});

//@desc     Delete Partshouse
//@route    Delete /api/partshouse/:id
//@access   Private
const deletePH = asyncHandler(async (req, res) => {
  const ph = await PH.findById(req.params.id);

  if (!ph) {
    res.status(400);
    throw new Error("Partshouse not found");
  }

  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

    //Make sure the logged in user matches the goal user
  if(ph.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized");
  }

  await ph.remove()
  res.status(200).json({message: `Partshouse deleted`, id: req.params.id});
});

module.exports = {
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};