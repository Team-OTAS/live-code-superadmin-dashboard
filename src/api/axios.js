import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

let token = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
console.log(token);
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default axios;
