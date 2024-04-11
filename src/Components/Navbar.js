import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LiveCodeLogo from "./../assets/images/logo.png";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import Typography from "@mui/material/Typography";
import "./../Styles/navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" sx={{ p: "10px" }}>
        <Toolbar>
          <img src={LiveCodeLogo} alt="LiveCodeLogo" />
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <p className="navTitle">Shop Accounts Management</p>
          </Typography>
          {/* <Button size="large" color="primary" variant="contained">
            <BugReportOutlinedIcon />
            <span className="btnText">Bug Report To Developer</span>
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
