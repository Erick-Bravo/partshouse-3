const express = require("express");
const router = express.Router();
const { getParts, createPart, updatePart, deletePart } = require("../controllers/partsController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getParts).post(protect, createPart)
router.route("/:id").delete(protect, deletePart).put(protect, updatePart)

module.exports = router;