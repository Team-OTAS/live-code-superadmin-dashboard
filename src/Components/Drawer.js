import { Button } from "@mui/material";
import React from "react";
import "./../Styles/drawer.css";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export default function Drawer() {
  return (
    <div className="DrawContainer">
      <Button size="large" color="primary" variant="contained">
        <ManageAccountsOutlinedIcon />
        <span className="btnText">Shop Management</span>
      </Button>
    </div>
  );
}
