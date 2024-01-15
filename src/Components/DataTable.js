import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/feature/apiSlice";
import "./../Styles/dashborad.css";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "name", headerName: "Shop Name", width: 200 },
  { field: "username", headerName: "User Name", width: 150 },
  { field: "address", headerName: "Account", width: 100 },
  {
    field: "email",
    headerName: "Package Plan",
    width: 200,
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
    field: "phone",
    headerName: "Expired Date",
    width: 200,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "#000",
            background: "#73FF1D",
            padding: "15px 10px",
            borderRadius: "8px",
            fontSize: 18,
            width: "100%",
            textAlign: "left",
            overflow: "hidden",
          }}
        >
          {cellValues.value}
        </div>
      );
    },
  },
];

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.entities);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const [tableData, setTableData] = useState([]);

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data));

    dispatch(fetchData());
    // setTableData(data);
  }, [dispatch]);

  const handleRowClick = (params) => {
    // Access the clicked row data using params.row
    console.log("Row clicked:", params.row);
    // You can perform additional actions based on the clicked row data
  };

  // console.log(tableData);
  // console.log(data.data);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        onRowClick={handleRowClick}
        components={{
          Toolbar: GridToolbar,
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
