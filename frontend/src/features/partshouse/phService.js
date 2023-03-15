import axios from "axios";
const API_URL = "/api/partshouse/";

//Get user Goals
const getPH = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Create New Goal
const createPH = async (phData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, phData, config);

  return response.data;
};

//Get user Goals
const deletePH = async (phId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + phId, config);

  return response.data;
};

const phService = {
  getPH,
  createPH,
  deletePH,
};

export default phService;
