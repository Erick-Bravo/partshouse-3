const express = require("express");
const router = express.Router();

const {
    getRecord_Logs,
    createRecord_log,
    deleteRecord_Log
} = require("../controllers/recordLogController");


router.route("/").get(getRecord_Logs).post(createRecord_log);
router.route("/:id").delete(deleteRecord_Log);

module.exports = router;