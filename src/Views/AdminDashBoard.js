import React from "react";
import Navbar from "./../Components/Navbar";
import Drawer from "../Components/Drawer";
import DataTable from "../Components/DataTable";
import ShopCreate from "../Components/ShopCreate";
import { Route, Routes } from "react-router-dom";
import ShopDetails from "../Components/ShopDetails";
import "./../Styles/dashborad.css";

export default function AdminDashBoard() {
  // const dispatch = useDispatch();

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
