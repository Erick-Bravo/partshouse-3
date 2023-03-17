const asyncHandler = require("express-async-handler");

const PH = require("../model/phModel");

//@desc     Get Partshouses
//@route    Get /api/partshouse
//@access   Private
const getPH = asyncHandler(async (req, res) => {
  const ph = await PH.find({ userId: req.user.id });

  res.status(200).json(ph);
});

//@desc     Create Partshouse
//@route    POST /api/partshouse
//@access   Private
const createPH = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }
  const ph = await PH.create({
    name: req.body.name,
    userId: req.user.id
  });

  res.status(200).json(ph);
});

//@desc     Update Partshouse
//@route    PUT /api/partshoue/:id
//@access   Private
const updatePH = asyncHandler(async (req, res) => {
  const ph = await PH.findById(req.params.id);

  if (!ph) {
    res.status(400);
    throw new Error("Partshouse not found");
  }

  //Where Does User come from in req? How does it get there? Check out Traversy Video
  //remember req.user comes from the authentication middleware you created req.user = <code>
  if(!req.user) {
    res.status(401);
    throw new Error("User not found");
  };

    //Make sure the logged in user matches the partshouse user
  if(ph.user.toString() !== req.user.id) {
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
  if(ph.userId.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized");
  }

  await ph.remove()
  res.status(200).json({message: `Partshouse deleted`, id: req.params.id});
});

module.exports = {
  getPH,
  createPH,
  updatePH,
  deletePH,
};
