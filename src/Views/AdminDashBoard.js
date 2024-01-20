import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalA, closeModalA } from "./../redux/feature/modalSlice";
import Navbar from "./../Components/Navbar";
import Drawer from "../Components/Drawer";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import "./../Styles/dashborad.css";
import CreateShop from "../Components/CreateShop";
import DataTable from "../Components/DataTable";
import CreateComplete from "../Components/CompleteCreateShop";
import AlertMessage from "../Components/AlertMessage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AdminDashBoard() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal);
  const alert = useSelector((state) => state.alert);
  console.log("alert", alert.isOpen);
  console.log(isModalOpen.modalA);

  const handleClickOpen = () => {
    dispatch(openModalA());
  };
  const handleClose = () => {
    dispatch(closeModalA());
  };
  return (
    <div>
      <Navbar />
      <div className="dashboardContainer">
        <Drawer />
        <div className="dashboardContent">
          <div className="barContainer">
            {/* <Paper
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
            </Button> */}
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
            >
              <PersonAddAlt1OutlinedIcon />
              <span className="btnText">Add New Shop</span>
            </Button>
          </div>
          <DataTable />
          {alert.isOpen && <AlertMessage />}
          {}
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isModalOpen.modalA.isOpen}
          >
            {isModalOpen.modalB.isOpen ? <CreateShop /> : <CreateComplete />}
          </BootstrapDialog>
        </div>
      </div>
    </div>
  );
}
