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
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { useSelector } from "react-redux";

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

const columns = [
  { field: "no", headerName: "No", width: 20 },
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
            color:
              Math.floor(
                (new Date(cellValues.value) - new Date()) /
                  (1000 * 60 * 60 * 24)
              ) > 100
                ? "#354E8E"
                : "#E81609",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: 12,
            width: "100%",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          {new Date(cellValues.value).toLocaleDateString()}
          <br />(
          {Math.floor(
            (new Date(cellValues.value) - new Date()) / (1000 * 60 * 60 * 24)
          )}{" "}
          <span>Days Left</span>)
        </Box>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => (
      <Button
        sx={{
          background: "#354E8E",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#4D3F3F",
            color: "#fff",
          },
        }}
        variant="filled"
        onClick={() => handleButtonClick(params.row.id)}
      >
        <PreviewOutlinedIcon sx={{ marginRight: "5px" }} />
        View Shop
      </Button>
    ),
  },
];

const handleButtonClick = (id) => {
  // Do something with the id, e.g., show in an alert
  alert(`Clicked on ID ${id}`);
};

const DataTable = () => {
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
        console.log("Work");
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, [isModalOpen.modalA]);
  console.log(apiData);

  // const handleRowClick = (params) => {
  //   // Access the clicked row data using params.row
  //   console.log("Row clicked:", params.row);
  //   // You can perform additional actions based on the clicked row data
  // };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={apiData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        // onRowClick={handleRowClick}
        onCellClick={false}
        components={{
          Toolbar: CustomToolbar,
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
