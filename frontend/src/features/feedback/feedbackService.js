import axios from "axios";
const API_URL = "/api/feedback/";

//Get user Parts
const getFeedback = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Create New Part
const createFeedback = async (feedbackData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, feedbackData, config);

  return response.data;
};


const feedbackService = {
    getFeedback,
    createFeedback
};

export default feedbackService;
