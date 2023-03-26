const express = require("express");
const router = express.Router();
const { getRecords, createRecord, updateRecord, deleteRecord } = require("../controllers/recordController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getRecords).post(protect, createRecord)
router.route("/:id").delete(protect, deleteRecord).put(protect, updateRecord)

module.exports = router;