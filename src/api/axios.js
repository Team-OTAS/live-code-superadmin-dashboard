import axios from "axios";
const BASE_URL = "http://localhost:8000/api";

// let usertoken = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer 2|LURBXEc8WnzA7nSc2db4I2tGZox6iZTAEjXDmiN601538277`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["X-XSRF-TOKEN"] =
  "eyJpdiI6InZ5d0ZSZE1wZ3N0djRsNFRIZXBpWGc9PSIsInZhbHVlIjoiZjRtNWZhZjZUSEt2dDRLTExXNlNiZDBuRUg2MVlhSDNrVTNCK0ZicFNuVk5CSUxnQmdLcnEyLzlCbERqU0RVdi83bjVmQ0x4SVcrekliSFJUaWhSSEpJdjQ3SmFVWkdvSzJPVTR3M1E3NEw2OGRZYWlhZVZkNndhcVBTNWdjU2kiLCJtYWMiOiJhYWEwNzdjZTdhZmVjZGFlMTVlNzVmOWE4ZDBiMDBiZjQxYjY4NzUzZmQ2NGQ1NjVkYzk1NWJhM2ZlZjNlM2I2IiwidGFnIjoiIn0%3D";
// console.warn("user token", usertoken);

export default axios;
