import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import axios from "./../api/axios";
import "./../Styles/dashborad.css";
import { Box, Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// api
import shopsDelete from "../redux/feature/shopDelete";
import Swal from "sweetalert2";

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between", height: "100px" }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

const DataTable = () => {
  const navigate = useNavigate();
  const deleteHandleClick = async (id) => {
    const res = await shopsDelete(id);
    // console.log(res);
    if (res.status === 204) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Shop deleted successfully",
      });
      getAllShops();
    }
  };

  const handleButtonClick = (id) => {
    navigate("/details/" + id);
  };

  const isModalOpen = useSelector((state) => state.modal);
  const [apiData, setApiData] = useState([]);

  const columns = [
    { field: "no", headerName: "No", width: 50 },
    { field: "name", headerName: "Shop Name", width: 200 },
    { field: "user_name", headerName: "User Name", width: 150 },
    { field: "phone", headerName: "Ph Number", width: 150 },

    {
      field: "expire_at",
      headerName: "Expired Date",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Box
            sx={{
              color: "#000",
              borderRadius: "3px",
              fontSize: "12px",
              paddingRight: "10px",
              width: "100%",
              textAlign: "left",
              overflow: "hidden",
              background: "#F2F3F7",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              className="color-box"
              sx={{
                background:
                  Math.floor(
                    (new Date(cellValues.value) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  ) > 100
                    ? "#6EC531"
                    : "#E81609",
              }}
            >
              p
            </Box>
            <div>
              {new Date(cellValues.value).toLocaleDateString()}(
              {Math.floor(
                (new Date(cellValues.value) - new Date()) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              <span>Days Left</span>)
            </div>
          </Box>
        );
      },
    },
    {
      field: "",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div>
          <Button
            sx={{
              background: "#354E8E",
              color: "#fff",
              padding: "5px 15px",
              fontSize: "12px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#354E8E",
                fontWeight: "bold",
                border: "1px solid #354E8E",
              },
            }}
            variant="filled"
            onClick={() => handleButtonClick(params.row.id)}
          >
            <StorefrontIcon sx={{ marginRight: "5px" }} />
            Details
          </Button>
          <Button
            sx={{
              background: "red",
              color: "#fff",
              marginLeft: "10px",
              padding: "5px 15px",
              fontSize: "12px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#354E8E",
                fontWeight: "bold",
                border: "1px solid #354E8E",
              },
            }}
            variant="filled"
            onClick={() => {
              deleteHandleClick(params.row.id);
            }}
          >
            <DeleteOutlineIcon />
          </Button>
        </div>
      ),
    },
  ];

  const getAllShops = async () => {
    // console.log("wrk");
    try {
      await axios.get("/api/shops").then((response) => {
        // Handle the API response here
        const data = response.data;
        const tabledata = data.data.map((item, index) => ({
          no: index + 1,
          ...item,
        }));
        setApiData(tabledata);
        // console.log("tabledata");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllShops();
    // Fetch API data
  }, [isModalOpen.modalA, setApiData]);

  return (
    <div style={{ height: 450, width: "100%" }}>
      <div className="barContainer">
        <NavLink to="/create">
          <Button
            size="large"
            color="primary"
            variant="contained"
            // onClick={handleClickOpen}
          >
            <PersonAddAlt1OutlinedIcon />
            <span className="btnText">Add New Shop</span>
          </Button>
        </NavLink>
      </div>
      <DataGrid
        rows={apiData}
        columns={columns}
        pageSize={12}
        loading={apiData.length === 0}
        components={{
          Toolbar: CustomToolbar,
          loadingOverlay: LinearProgress,
        }}
      />
    </div>
  );
};

export default DataTable;
