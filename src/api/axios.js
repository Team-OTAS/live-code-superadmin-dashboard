import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
// console.log(token);
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export { setAuthToken };
export default axios;
