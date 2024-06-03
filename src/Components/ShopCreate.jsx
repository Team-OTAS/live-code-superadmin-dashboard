import React, { useRef, useState } from "react";
import "./../Styles/shopcreate.css";
import { Grid } from "@mui/material";
import { openModalB } from "./../redux/feature/modalSlice";
import { resdata } from "../redux/feature/randomUserSlice";
import axios from "axios";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import CreateComplete from "../Components/CompleteCreateShop";
import { useNavigate } from "react-router-dom";

function ShopCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal);
  const [loading, setLoading] = useState(false);
  const nameref = useRef();
  const phoneref = useRef();
  const packageref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameref.current.value,
      phone: phoneref.current.value,
      expire_at: packageref.current.value,
    };
    submitData(data);
    setLoading(true);
  };

  const submitData = async (data) => {
    try {
      const res = await axios.post("/api/shops", data);
      if (res) {
        setLoading(false);
        console.log("Its Work");
      }
      console.log("response", res.data.data);
      dispatch(openModalB());
      dispatch(resdata(res.data.data));
      setLoading(false);
      return res.data;
    } catch (error) {
      if (error instanceof SyntaxError) {
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question",
        });
      } else if (error) {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      }

      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (isModalOpen.modalB.isOpen) {
    return <CreateComplete />;
  }

  return (
    <div className="containers">
      {/* <CreateComplete /> */}
      <p className="titles">Create New Shop</p>
      {/* Shop Info */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="create-input">
            <StorefrontRoundedIcon className="create-input-icon" />
            <div>
              <label>Shop Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Shop Name"
                ref={nameref}
                required
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="create-input">
            <LocalPhoneRoundedIcon className="create-input-icon" />
            <div>
              <label>Phone Number</label>
              <br />
              <input
                type="text"
                placeholder="Enter Ph Number"
                ref={phoneref}
                required
              />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Package Plan */}
      <p className="title">Package Plan</p>

      <div className="create-input">
        <br />
        <input
          type="text"
          placeholder="Enter the susbscription Timeline"
          ref={packageref}
          required
          style={{ width: "50%", padding: "20px" }}
        />
      </div>

      {/* Button */}
      <div style={{ marginTop: "50px", textAlign: "end" }}>
        <button
          className="create-btn cancel"
          onClick={() => {
            navigate("/admindashboard");
          }}
        >
          Cancel
        </button>
        <button className="create-btn create" onClick={handleSubmit}>
          Create Shop
        </button>
      </div>
    </div>
  );
}

export default ShopCreate;
