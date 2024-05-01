import React, { useEffect, useRef, useState } from "react";
import "./../Styles/detailbox.css";
import { Grid } from "@mui/material";
import { openModalB } from "./../redux/feature/modalSlice";
import { resdata } from "../redux/feature/randomUserSlice";
import axios from "./../api/axios";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import UpgradeRoundedIcon from "@mui/icons-material/UpgradeRounded";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import PanoramaFishEyeOutlinedIcon from "@mui/icons-material/PanoramaFishEyeOutlined";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useParams } from "react-router-dom";

function ShopDetails() {
  const { id } = useParams();
  const [shop, setShop] = useState();
  const [packageid, setPackage] = useState(1);
  const [show, setShow] = useState(false);

  const getshop = async () => {
    try {
      const res = await axios.get("/api/shops/" + id);
      console.log("response", res.data.data);
      setShop(res.data.data);
      setPackage(res.data.data.subscription_plan.id);
    } catch (error) {
      if (error instanceof SyntaxError) {
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    }
  };

  const getexpire = (times) => {
    const date = new Date(times);
    const expireTime = date.getTime() - Date.now();
    const expireDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}(${Math.trunc(
      expireTime / 1000 / 60 / 60 / 24
    )} Days Lefts)`;
    return expireDate;
  };

  useEffect(() => {
    getshop();
  }, []);

  return (
    <div className="containers">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="titles">User Shop Info</p>

        <button
          className="btn-update"
          onClick={() => {
            setShow(true);
          }}
        >
          <span>Update Plan</span>
          <UpgradeRoundedIcon className="update-icon" />
        </button>
      </div>

      {/* Shop Info */}
      {shop && (
        <div>
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <Grid item xs={12} md={4}>
              <div className="detail-box">
                <div>
                  <img
                    src={`https://api.livecodemm.com${shop.logo}`}
                    alt="shoplogo"
                  />
                </div>
                <div className="detail-box-content">
                  <p>Name</p>
                  <span>{shop.name}</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="detail-box">
                <div>
                  <CalendarMonthRoundedIcon className="detail-input-icon cleander" />
                </div>
                <div className="detail-box-content">
                  <p>Package Expires In </p>
                  <span>{getexpire(shop.expire_at)}</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="detail-box">
                <div>
                  <CardMembershipIcon className="detail-input-icon" />
                </div>
                <div className="detail-box-content">
                  <p>Package Type</p>
                  <span>{shop.subscription_plan.name}</span>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: "50px" }}>
            <Grid item xs={12} md={4}>
              <div className="detail-box">
                <div>
                  <HomeRoundedIcon className="detail-input-icon" />
                </div>
                <div className="detail-box-content">
                  <p>Address</p>
                  <span>{shop.address}</span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className="detail-box">
                <div>
                  <LocalPhoneRoundedIcon className="detail-input-icon" />
                </div>
                <div className="detail-box-content">
                  <p>Phone Number</p>
                  <span>{shop.phone}</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}

      {/* Package Plan */}
      {show && (
        <div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="title">Package Plan</p>
            <div>
              <button
                className="create-btn cancel"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button className="create-btn create">Create Shop</button>
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div
                className={
                  packageid === 1
                    ? "PackegeContainer active"
                    : "PackegeContainer"
                }
                onClick={() => setPackage(1)}
              >
                <PanoramaFishEyeOutlinedIcon className="circles" />
                <p>Easy Shop Package </p>
                <span>
                  Please add your content here. Keep it short and simple. And
                  smile
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className={
                  packageid === 2
                    ? "PackegeContainer active"
                    : "PackegeContainer"
                }
                onClick={() => setPackage(2)}
              >
                <PanoramaFishEyeOutlinedIcon className="circles" />
                <p>Normal User Package</p>
                <span>
                  Please add your content here. Keep it short and simple. And
                  smile
                </span>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className={
                  packageid === 3
                    ? "PackegeContainer active"
                    : "PackegeContainer"
                }
                onClick={() => setPackage(3)}
              >
                <PanoramaFishEyeOutlinedIcon className="circles" />
                <p>Advence Shop Package</p>
                <span>
                  Please add your content here. Keep it short and simple. And
                  smile
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      )}

      {/* Button */}
    </div>
  );
}

export default ShopDetails;
