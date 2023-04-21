import axios from "axios";
const API_URL = "/api/parts/";

//Get user Parts
const getParts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Get user Parts
const getRecordParts = async (recordId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + recordId, config);

  return response.data;
};

//Create New Part
const createPart = async (partData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, partData, config);

  return response.data;
};

const updatePart = async (partData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + partData.id, partData, config);

  return response.data;
};

//Get user Part
const deletePart = async (partId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + partId, config);

  return response.data;
};

const partService = {
  getParts,
  createPart,
  deletePart,
  getRecordParts,
  updatePart,
};

export default partService;