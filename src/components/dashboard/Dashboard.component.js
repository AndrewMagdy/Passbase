import React from "react";
import { Grid, Button, Paper, Badge, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DashboardAppBar from "./DashboardAppBar.component";
import PopUp from "./PopUp.component";
import Table from "./Table.component";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <DashboardAppBar />
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

        <Table handleOpen={handleOpen} />
        <PopUp open={open} handleClose={handleClose} />
      </main>
    </div>
  );
};

export default Dashboard;
