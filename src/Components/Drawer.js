import { Button } from "@mui/material";
import React from "react";
import "./../Styles/drawer.css";
import LiveCodeLogo from "./../assets/images/logo.png";
import StorefrontIcon from "@mui/icons-material/Storefront";
// import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export default function Drawer() {
  return (
    <div className="DrawContainer">
      <img src={LiveCodeLogo} alt="LiveCodeLogo" />
      <Button color="primary" variant="contained">
        <StorefrontIcon />
        <span className="btnText">Shop Management</span>
      </Button>
    </div>
  );
}
