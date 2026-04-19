import axios from "axios";

// REPLACE THIS URL with the "Forwarding" link from 'ngrok http 5000'
const API_BASE_URL = 'https://your-backend-id.ngrok-free.app'; 

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

export default API_BASE_URL;