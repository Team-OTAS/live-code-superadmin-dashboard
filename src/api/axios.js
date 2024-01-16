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
  "eyJpdiI6IlRZeEpEdkpjZXNuMHlKWFB0U2p3bVE9PSIsInZhbHVlIjoiWkNrYmJxZXJlMnduNmtzaEp2WGFUZ0psTm5yZGRvYTU3NytxajQzMHBHUTQvVUJtc1BMVWdJclFvcm1pQTF4ZkIxV2JvdjU3UFp4UDBubVpnek5LUXBhZVZhMVpWT0FYVk1nNWN4VHFBcWJvOTNIRXpaWFo0VDErMlZaOGZJb1YiLCJtYWMiOiJkNmEzODY3OTRkMDFiODU3Yzk5ZGNlZGU3NmViZGQzZjU0MDIxYzMxMTFkY2E5NmFjNTExMjQ0MjUyMGQyMzE0IiwidGFnIjoiIn0%3D";
// console.warn("user token", usertoken);

export default axios;
