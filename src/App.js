import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Login from "./components/login/Login.component";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Login />
    </MuiThemeProvider>
  );
}

export default App;
