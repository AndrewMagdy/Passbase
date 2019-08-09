import React from "react";
import { Grid, Button, Paper, Badge, Chip, Box } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../themeColors";
import PopUp from "./PopUp.component";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  cardContainer: { marginTop: "1vh", marginBottom: "2vh" },
  rightCardContainer: { marginBottom: "2vh" },
  cardButton: { marginRight: "5%", width: "25%" }
}));

const Dashboard = () => {
  const classes = useStyles();
  const renderDotCell = value => {
    if (value) {
      return (
        <Badge color="primary" variant="dot" className={classes.badge}>
          <React.Fragment />
        </Badge>
      );
    }
  };

  const renderScoreCell = value => {
    const criticalLimit = 25;
    const criticalText = "Critical";

    if (value <= criticalLimit) {
      return (
        <React.Fragment>
          <Typography variant="caption">{`${value}% `} </Typography>

          <Chip color="secondary" size="small" label={criticalText} />
        </React.Fragment>
      );
    }

    return value;
  };

  const columns = [
    "#",
    {
      name: "",
      options: {
        customBodyRender: renderDotCell
      }
    },
    "Time",
    "First Name",
    "Last Name",
    "Location",
    "Authentication Document",
    {
      name: "Score",
      options: {
        customBodyRender: renderScoreCell
      }
    },
    "Status"
  ];

  let data = [
    ["1", "", "Joe", "James", "Egypt", "Passport", "20", 20, "clear"],
    ["1", true, "Joe", "James", "Egypt", "Passport", "20", 30, "clear"],
    ["1", "", "Joe", "James", "Egypt", "Passport", "20", 30, "clear"],
    ["1", "", "Joe", "James", "Egypt", "Passport", "20", 30, "clear"]
  ];

  data = [...data, ...data, ...data];

  const renderFooter = (
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage
  ) => {
    const maxNumOfButtons = 5;
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {["Dashboard", "Documentation", "Analytics", "Setting"].map(
            (text, index) => (
              <ListItem
                style={{
                  borderLeft:
                    index == 0 && `4px solid ${colors.primaryColors.blue}`,
                  marginBottom: "5%"
                }}
                button
                key={text}
              >
                <ListItemText>
                  <Typography component="span">
                    <Box fontWeight={index === 0 ? 700 : 400}>{text}</Box>
                  </Typography>
                </ListItemText>
                <Box fontWeight={700}>
                  <Chip color="primary" size="small" label="25" />
                </Box>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Button variant="contained" color="secondary">
          Filter
        </Button>

        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={10}
          className={classes.cardContainer}
        >
          <Grid item xs={6}>
            <Paper>
              <Typography
                style={{
                  paddingBottom: "2vh",
                  paddingTop: "2vh",
                  marginLeft: "5%"
                }}
              >
                Changes From The Last 7 Days
              </Typography>

              <Grid container item direction="row" justify="space-around">
                <Grid
                  container
                  item
                  direction="column"
                  xs={6}
                  className={classes.rightCardContainer}
                >
                  <Grid container item direction="row" justify="center">
                    <Typography variant={"h3"}>48 </Typography>
                  </Grid>
                  <Grid container item direction="row" justify="center">
                    <Typography>Total Authentications </Typography>
                  </Grid>
                  <Grid container item direction="row" justify="center">
                    <Chip color="primary" label="1 New" />
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  direction="column"
                  xs={6}
                  style={{ marginBottom: "2vh" }}
                >
                  <Grid container item direction="row" justify="center">
                    <Typography variant={"h3"}>62.3%</Typography>
                  </Grid>
                  <Grid container item direction="row" justify="center">
                    <Typography>Total Trust Score </Typography>
                  </Grid>
                  <Grid container item direction="row" justify="center">
                    <Chip color="primary" label="-38.5 p.p" />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid container item direction="column" xs={6} justify="center">
            <Grid
              item
              xs
              style={{
                marginTop: "2%"
              }}
            >
              <Paper
                style={{
                  paddingTop: "2%",
                  paddingBottom: "2%"
                }}
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Grid container item xs>
                    <Grid item xs={2} style={{ paddingLeft: "5%" }}>
                      <Badge
                        color="primary"
                        variant="dot"
                        className={classes.badge}
                      >
                        <React.Fragment />
                      </Badge>
                    </Grid>

                    <Grid item xs={10}>
                      <Typography>46 Users Need Approval</Typography>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.cardButton}
                  >
                    Start now
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper style={{ paddingTop: "2%", paddingBottom: "2%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="center"
                >
                  <Grid
                    container
                    alignItems="flex-end"
                    justify="flex-end"
                    item
                    xs
                  >
                    <Grid item xs={2} style={{ paddingLeft: "5%" }}>
                      <Badge
                        color="secondary"
                        variant="dot"
                        className={classes.badge}
                      >
                        <React.Fragment />
                      </Badge>
                    </Grid>

                    <Grid item xs={10}>
                      <Typography>25 Users have a critical score</Typography>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.cardButton}
                  >
                    Take action
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <MUIDataTable
          data={data}
          columns={columns}
          options={{
            filter: false,
            search: false,
            download: false,
            print: false,
            viewColumns: false,
            selectableRows: "none"
          }}
        />
        <PopUp />
      </main>
    </div>
  );
};

export default Dashboard;
