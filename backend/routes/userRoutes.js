const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
