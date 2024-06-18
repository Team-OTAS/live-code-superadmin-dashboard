import React from "react";
import Box from "@mui/material/Box";
import { NavLink, useLocation } from "react-router-dom";
import "./../Styles/navbar.css";

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <NavLink to="/admindashboard" className="navTitle">
          Shop Account Management
        </NavLink>
        {location.pathname.includes("/details") && (
          <NavLink to="/details/:id" className="navTitle">
            {" > Detail"}
          </NavLink>
        )}
        {location.pathname === "/create" && (
          <NavLink to="/create" className="navTitle">
            {" > Add New Shop"}
          </NavLink>
        )}
      </div>
      {/* <p className="navTitle">{`Shop Account Management  ${
        location.pathname === "> /details" ? "Detail" : ""
      } ${location.pathname === "> /create" ? "Add New Shop" : ""}`}</p> */}
      {/* <AppBar position="static" color="secondary" sx={{ p: "10px" }}>
        <Toolbar>
          <img src={LiveCodeLogo} alt="LiveCodeLogo" />
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <p className="navTitle">Shop Accounts Management</p>
          </Typography>
          <Button size="large" color="primary" variant="contained">
            <BugReportOutlinedIcon />
            <span className="btnText">Bug Report To Developer</span>
          </Button>
        </Toolbar>
      </AppBar> */}
    </Box>
  );
}
