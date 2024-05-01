
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Replace with your backend server URL

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
