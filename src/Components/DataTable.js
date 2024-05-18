import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  // GridToolbarFilterButton,
} from "@mui/x-data-grid";
import axios from "./../api/axios";
import "./../Styles/dashborad.css";
import { Box, Button } from "@mui/material";
// import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <GridToolbarColumnsButton />
      <GridToolbarQuickFilter />
      {/* <GridToolbarFilterButton /> */}
    </GridToolbarContainer>
  );
}

const DataTable = () => {
  const navigate = useNavigate();

  const columns = [
    { field: "no", headerName: "No", width: 50 },
    { field: "name", headerName: "Shop Name", width: 200 },
    { field: "user_name", headerName: "User Name", width: 150 },
    { field: "phone", headerName: "Contact Num", width: 200 },

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
      width: 200,
      renderCell: (params) => (
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
          Shops Details
        </Button>
      ),
    },
  ];

  const handleButtonClick = (id) => {
    navigate("/details/" + id);
  };

  const isModalOpen = useSelector((state) => state.modal);
  console.log("modal", isModalOpen.modalA);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Fetch API data
    axios
      .get("/api/shops")
      .then((response) => {
        // Handle the API response here
        const data = response.data;
        const tabledata = data.data.map((item, index) => ({
          no: index + 1,
          ...item,
        }));
        setApiData(tabledata);
        // console.log("Work");
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, [isModalOpen.modalA]);

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
        // onSelectionModelChange={({ selectionModel }) => {
        //   const rowIds = selectionModel.map((rowId) =>
        //     parseInt(String(rowId), 10)
        //   );
        //   const rowsToDelete = tableData.filter((row) =>
        //     rowIds.includes(row.id)
        //   );
        //   setDeletedRows(rowsToDelete);
        //   console.log(deletedRows);
        // }}
      />
    </div>
  );
};

export default DataTable;
