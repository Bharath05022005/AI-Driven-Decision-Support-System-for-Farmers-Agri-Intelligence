import axios from "axios";

// When using Ngrok, replace 'http://localhost:5000' with your Backend Ngrok URL
// Example: "https://backend-abc-123.ngrok-free.app"
const API_BASE_URL = 'https://your-backend-id.ngrok-free.app';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

export default API_BASE_URL;