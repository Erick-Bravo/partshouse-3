import axios from "axios";
const API_URL = "/api/recordlogs/";

const getRecordLogs = async (recordId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + recordId, config);

  return response.data;
};

const createRecordLog = async (logData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, logData, config);

  return response.data;
};

const deleteRecordLog = async (logId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + logId, config);

  return response.data;
};


const recordLogService = {
    getRecordLogs,
    createRecordLog,
    deleteRecordLog
};

export default recordLogService;
