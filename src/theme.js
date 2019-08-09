import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Exo",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: {
      main: "#0045ff"
    },
    secondary: {
      main: "#fff"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize"
      }
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#3a8f63"
      },
      colorSecondary: {
        backgroundColor: "#df5c57"
      }
    },
    MuiChip: {
      root: { borderRadius: "none" },
      colorPrimary: {
        backgroundColor: "#e6eafd",
        color: "#0045ff"
      },
      colorSecondary: {
        backgroundColor: "#df5c57",
        color: "#fff"
      },
      labelSmall: {
        fontSize: 10,
        paddingLeft: 5,
        paddingRight: 5
      }
    },
    MUIDataTable: {
      root: {},
      paper: {
        boxShadow: "none"
      }
    },
    MUIDataTableBodyRow: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "rgb(250, 251, 252)"
        }
      }
    },
    MUIDataTableBodyCell: {}
  }
});

export default theme;
