import Swal from "sweetalert2";
import axios from "./../../api/axios";

const shopsDelete = async (id) => {
  try {
    const response = await axios.delete("/api/shops/" + id);
    // console.log("response", response);
    return response;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response.data.message,
    });
  }
};

export default shopsDelete;
