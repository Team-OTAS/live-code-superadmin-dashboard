import React from "react";
import Navbar from "./../Components/Navbar";
import Drawer from "../Components/Drawer";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "./../Styles/dashborad.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "No",
    width: 70,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "firstName",
    headerName: "Shop Name",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lastName",
    headerName: "User Name",
    width: 120,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "age",
    headerName: "Accounts",
    headerClassName: "super-app-theme--header",
    width: 100,
  },
  {
    field: "Package Plan",
    width: 250,
    headerClassName: "super-app-theme--header",
    renderCell: (cellValues) => {
      return (
        <Button variant="contained" color="plan" sx={{ paddingY: "15px" }}>
          3 Month Subscription <br />
          Plan
        </Button>
      );
    },
  },
  {
    field: "Expire Date",
    width: 200,
    headerClassName: "super-app-theme--header",
    renderCell: (cellValues) => {
      return (
        <Button variant="contained" color="info" sx={{ paddingY: "15px" }}>
          1/6/2024
          <br />
          (179 Days Left)
        </Button>
      );
    },
  },
  {
    field: "Detail",
    width: 180,
    headerClassName: "super-app-theme--header",
    renderCell: (cellValues) => {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="contained" color="primary">
            View Shop
          </Button>
          <Button variant="contained" color="primary" sx={{ mt: 1 }}>
            Contact Shop
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Ko Saw",
    firstName: "Digital Saw",
    age: 35,
    gender: "Male",
    date: "12",
  },
];

export default function AdminDashBoard() {
  return (
    <div>
      <Navbar />
      <div className="dashboardContainer">
        <Drawer />
        <div className="dashboardContent">
          <div className="barContainer">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Shop"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ marginX: "10px" }}
            >
              <TuneOutlinedIcon />
              <span className="btnText">Life Span Filter</span>
            </Button>
            <Button size="large" color="primary" variant="contained">
              <PersonAddAlt1OutlinedIcon />
              <span className="btnText">Add New Shop</span>
            </Button>
          </div>
          <Box
            sx={{
              height: 300,
              width: "100%",
              paddingTop: 2,
              "& .super-app-theme--header": {
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "600",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              rowHeight={100}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </Box>
        </div>
      </div>
    </div>
  );
}
