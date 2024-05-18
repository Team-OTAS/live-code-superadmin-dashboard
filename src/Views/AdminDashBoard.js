import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalA, closeModalA } from "./../redux/feature/modalSlice";
import Navbar from "./../Components/Navbar";
import Drawer from "../Components/Drawer";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import "./../Styles/dashborad.css";
import CreateShop from "../Components/CreateShop";
import DataTable from "../Components/DataTable";
import CreateComplete from "../Components/CompleteCreateShop";
import AlertMessage from "../Components/AlertMessage";
import ShopCreate from "../Components/ShopCreate";
import { Route, Router, Routes } from "react-router-dom";
import ShopDetails from "../Components/ShopDetails";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AdminDashBoard() {
  // const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal);
  const alert = useSelector((state) => state.alert);
  console.log("alert", alert.isOpen);
  console.log(isModalOpen.modalA);

  return (
    <div>
      <div className="dashboardContainer">
        <Drawer />
        <div className="dashboardContent">
          <Navbar />

          <Routes>
            <Route path="/admindashboard" element={<DataTable />} />
            <Route path="/create" element={<ShopCreate />} />
            <Route path="/details/:id" element={<ShopDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
