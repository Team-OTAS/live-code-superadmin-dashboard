import { Button } from "@mui/material";
import React from "react";
import "./../Styles/drawer.css";
import LiveCodeLogo from "./../assets/images/logo.png";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
// import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export default function Drawer() {
  const navigate = useNavigate();
  return (
    <div className="DrawContainer">
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          marginBottom: "200px",
        }}
      >
        <img src={LiveCodeLogo} alt="LiveCodeLogo" />
        <Button
          color="primary"
          variant="contained"
          sx={{ marginTop: "30px" }}
          onClick={() => navigate("/admindashboard")}
        >
          <StorefrontIcon />
          <span className="btnText">Shop Management</span>
        </Button>
      </div>
      <Button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
