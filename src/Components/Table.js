import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

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
  
  

export default function Table() {
  return (
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
  )
}
