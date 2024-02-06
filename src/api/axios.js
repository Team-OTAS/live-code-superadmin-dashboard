import axios from "axios";
const BASE_URL = "http://128.199.246.237/live-code-api/api";

// let usertoken = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer 1|ohwUOnGRpQdmpSaIRAGi9XxouxvwFB5tYSen19um30ac2918`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["X-XSRF-TOKEN"] =
  "eyJpdiI6IlRZeEpEdkpjZXNuMHlKWFB0U2p3bVE9PSIsInZhbHVlIjoiWkNrYmJxZXJlMnduNmtzaEp2WGFUZ0psTm5yZGRvYTU3NytxajQzMHBHUTQvVUJtc1BMVWdJclFvcm1pQTF4ZkIxV2JvdjU3UFp4UDBubVpnek5LUXBhZVZhMVpWT0FYVk1nNWN4VHFBcWJvOTNIRXpaWFo0VDErMlZaOGZJb1YiLCJtYWMiOiJkNmEzODY3OTRkMDFiODU3Yzk5ZGNlZGU3NmViZGQzZjU0MDIxYzMxMTFkY2E5NmFjNTExMjQ0MjUyMGQyMzE0IiwidGFnIjoiIn0%3D";
// console.warn("user token", usertoken);

export default axios;
