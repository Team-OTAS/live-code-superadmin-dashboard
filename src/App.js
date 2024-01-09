import AdminDashBoard from "./Views/AdminDashBoard";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <AdminDashBoard />
      </div>
    </ThemeProvider>
  );
}

export default App;
