import axios from "axios";
const API_URL = "/api/records/";

//Get user Records
const getRecords = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Get user Record Page Info
const getRecord = async (recordId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + recordId, config);

  return response.data;
};

//Update user Record Page Info
const updateRecord = async (recordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + recordData.id, recordData, config);

  return response.data;
};

//Create New Record
const createRecord = async (recordData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, recordData, config);

  return response.data;
};

//Get user Record
const deleteRecord = async (recordId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + recordId, config);

  return response.data;
};

const recordService = {
  getRecords,
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
};

export default recordService;