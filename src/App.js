import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Login from "./components/login/Login.component";
import theme from "./theme";
import Dashboard from "./components/dashboard/Dashboard.component";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Login /> */}
      <Dashboard />
    </MuiThemeProvider>
  );
}

export default App;
