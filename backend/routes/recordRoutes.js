const express = require("express");
const router = express.Router();
const {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
  getRecord
} = require("../controllers/recordController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getRecords).post(protect, createRecord);
router
  .route("/:id")
  .delete(protect, deleteRecord)
  .put(protect, updateRecord)
  .get(protect, getRecord);

module.exports = router;
