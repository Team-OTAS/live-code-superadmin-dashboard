import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import AdminDashBoard from "./Views/AdminDashBoard";
import LoginAcc from "./Pages/LoginAcc";

import fetchXsrfToken from "./api/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d3f3f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    info: {
      main: "#73ff1d",
    },
    plan: {
      main: "#370FC8",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div style={{ overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<LoginAcc />} />
            <Route path="*" element={<AdminDashBoard />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
