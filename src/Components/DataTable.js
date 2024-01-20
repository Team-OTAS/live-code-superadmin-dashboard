import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import axios from "axios";
import "./../Styles/dashborad.css";
import { Button } from "@mui/material";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { useDispatch, useSelector } from "react-redux";
import CustomNoRowsOverlay from "./NoRowOverlay";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: "no", headerName: "No", width: 20 },
  { field: "name", headerName: "Shop Name", width: 200 },
  { field: "id", headerName: "User Name", width: 150 },
  {
    field: "subid",
    headerName: "Account",
    width: 100,
    valueGetter: (params) => params.row.subscription_plan.id,
  },
  {
    field: "subname",
    headerName: "Package Plan",
    width: 200,
    valueGetter: (params) => params.row.subscription_plan.name,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "white",
            background: "#370FC8",
            padding: "15px 10px",
            borderRadius: "8px",
            fontSize: 18,
            width: "100%",
            textAlign: "left",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },

  {
    field: "expire_at",
    headerName: "Expired Date",
    width: 200,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "#000",
            background: "#73FF1D",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: 12,
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {new Date(cellValues.value).toLocaleDateString()}
          <br />(
          {Math.floor(
            (new Date(cellValues.value) - new Date()) / (1000 * 60 * 60 * 24)
          )}{" "}
          <span>Days Left</span>)
        </div>
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
          background: "#4d3f3f",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px 18px 10px 18px",
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
      .get("/shops")
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

  const handleRowClick = (params) => {
    // Access the clicked row data using params.row
    console.log("Row clicked:", params.row);
    // You can perform additional actions based on the clicked row data
  };

  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={apiData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        onRowClick={handleRowClick}
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
