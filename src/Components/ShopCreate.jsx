import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import { openModalB } from "./../redux/feature/modalSlice";
import { resdata } from "../redux/feature/randomUserSlice";
import axios from "axios";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import CreateComplete from "../Components/CompleteCreateShop";
import { useNavigate } from "react-router-dom";

import "./../Styles/shopcreate.css";

function ShopCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal);
  const [loading, setLoading] = useState(false);
  const nameref = useRef();
  const phoneref = useRef();
  const packageref = useRef();

  const validatePhoneNumber = (number) => {
    // Basic regex pattern for a 10-digit phone number (e.g., 123-456-7890, (123) 456-7890, 1234567890
    const phonePattern = /^(?:\+95|095|09)?\d{7,10}$/;
    return phonePattern.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePhoneNumber(phoneref.current.value)) {
      const data = {
        name: nameref.current.value,
        phone: phoneref.current.value,
        expire_at: packageref.current.value,
      };
      submitData(data);
      setLoading(true);
    } else {
      Swal.fire({
        title: "Error",
        text: "Please Enter Valid Phone Number",
        icon: "error",
      });
    }
  };

  const submitData = async (data) => {
    console.log("data", packageref.current.value);
    try {
      const res = await axios.post("/api/shops", data);
      dispatch(openModalB());
      dispatch(resdata(res.data.data));
      setLoading(false);
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
        <Grid item xs={12} md={6} sx={{ marginTop: "20px" }}>
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

        <Grid item xs={12} md={6} sx={{ marginTop: "20px" }}>
          <div className="create-input">
            <LocalPhoneRoundedIcon className="create-input-icon" />
            <div>
              <label>Phone Number</label>
              <br />
              <input
                type="phone"
                placeholder="Enter Ph Number"
                ref={phoneref}
                required
              />
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} sx={{ marginTop: "20px" }}>
          <div className="create-input">
            <CalendarTodayRoundedIcon className="create-input-icon" />
            <div>
              <label>Package Plan</label>
              <br />
              <input
                type="phone"
                placeholder="Enter the susbscription Timeline"
                ref={packageref}
                required
              />
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Package Plan */}

      {/* <div className="create-input">
        <label>Package Plan</label>
        <br />
        <input
          type="text"
          placeholder="Enter the susbscription Timeline"
          ref={packageref}
          required
          style={{ width: "50%", padding: "20px" }}
        />
      </div> */}

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
