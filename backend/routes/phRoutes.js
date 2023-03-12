const express = require("express");
const router = express.Router();
const { getPH, createPH, updatePH, deletePH } = require("../controllers/phController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPH).post(protect, createPH)
router.route("/:id").delete(protect, deletePH).put(protect, updatePH)

module.exports = router;