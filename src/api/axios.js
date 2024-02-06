import axios from "axios";
const BASE_URL = "http://128.199.246.237/live-code-api/api";

let token = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${token}`;
console.log(token)
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export default axios;
