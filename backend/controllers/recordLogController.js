const asyncHandler = require("express-async-handler");

const Record_Logs = require("../model/recordLogsModel");

const getRecord_Logs = asyncHandler(async (req, res) => {
  const record_logs = await Record_Logs.find({ recordId: req.body.recordId });

  res.status(200).json(record_logs);
});

const createRecord_log = asyncHandler(async (req, res) => {
  if (!req.body.log) {
    res.status(400);
    throw new Error("Please add a log field");
  }
  const log = await Record_Logs.create({
    log: req.body.log,
    recordId: req.body.recordId,
  });

  res.status(200).json(log);
});

const deleteRecord_Log = asyncHandler(async (req, res) => {
  const log = await Record_Logs.findById(req.params.id);

  if (!log) {
    res.status(400);
    throw new Error("log not found");
  }

  await log.remove();
  res.status(200).json({ message: `Log deleted`, id: req.params.id });
});

module.exports = {
    getRecord_Logs,
    createRecord_log,
    deleteRecord_Log
};
