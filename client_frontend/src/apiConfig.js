import axios from "axios";

// Use VITE_API_URL if explicitly set (e.g. for production).
// Otherwise use '' (empty) so all requests are RELATIVE to the page origin.
// This lets Vite's proxy forward /login, /api/*, /predict, etc. to Flask
// no matter which device is accessing the site.
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

export default API_BASE_URL;
