const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

//@desc     Create new user
//@route    POST /api/users
//@access   Public
const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ( !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//@desc     Authenticate new user
//@route    POST /api/users/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error("Invalid Credentials")
  }
});


////////////////////////////////////////////////////////////////////////////////////////////////////////
//@desc     Get user data
//@route    GET /api/users/me
//@access   Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    email
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  })
};

module.exports = {
  createUser,
  loginUser,
  getMe,
};
