import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Grid,
  LinearProgress,
  Box,
  Button,
  IconButton
} from "@material-ui/core";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Close from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import usFlag from "../../assets/us-flag.png";
import idImage from "../../assets/id_document.png";
import personVideo from "../../assets/person_video.mp4";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "90vw",
    height: "90vh",
    top: "5vh",
    left: "5vw",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    borderRadius: 10
  }
}));

export default function PopUp({ open, handleClose }) {
  const classes = useStyles();

  const renderRequirement = text => (
    <Grid container item xs direction="row" alignItems="center" spacing={4}>
      <Grid item>
        <CheckCircleIcon style={{ fontSize: 15, color: "#e9e9e9" }} />
      </Grid>
      <Grid item>
        <Typography>{text} </Typography>
      </Grid>
    </Grid>
  );

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <Grid container direction="row" className={classes.paper}>
        <Grid
          item
          xs={2}
          style={{
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            maxWidth: "15%"
          }}
        >
          <List>
            {["Summary", "Data Points", "History"].map((text, index) => (
              <ListItem
                style={{
                  borderLeft: index === 0 && `4px solid #000`,
                  marginBottom: "15%"
                }}
                button
                key={text}
              >
                <ListItemText>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    style={{ textTransform: "uppercase" }}
                  >
                    <Box
                      fontWeight={index === 0 ? 700 : 400}
                      textAlign="center"
                      color={index === 0 ? "text.primary" : "grey.400"}
                    >
                      {text}
                    </Box>
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid container item direction="column" xs={10}>
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            style={{ marginTop: "1%" }}
          >
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justify="center"
            spacing={4}
            style={{
              marginTop: "1%",
              width: "90%",
              marginLeft: "5%",
              marginBottom: "1%"
            }}
          >
            <Grid container direction="column" item xs={2}>
              <Grid container item>
                <Typography variant="h1">24</Typography>
                <Typography variant="h6">%</Typography>
              </Grid>

              <Typography variant="body2">TOTAL SCORE</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography
                style={{
                  marginBottom: "1%"
                }}
              >
                FaceMatch Factor
              </Typography>
              <LinearProgress
                style={{
                  marginBottom: "5%"
                }}
                color="primary"
                variant="determinate"
                value={10}
              />

              <Typography
                style={{
                  marginBottom: "1%"
                }}
              >
                ID Authenticity Factor
              </Typography>
              <LinearProgress
                style={{
                  marginBottom: "5%"
                }}
                color="primary"
                variant="determinate"
                value={30}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography
                style={{
                  marginBottom: "1%"
                }}
              >
                Liveness Factor
              </Typography>
              <LinearProgress
                style={{
                  marginBottom: "5%"
                }}
                color="primary"
                variant="determinate"
                value={10}
              />

              <Typography
                style={{
                  marginBottom: "1%"
                }}
              >
                Overall Factor
              </Typography>
              <LinearProgress
                style={{
                  marginBottom: "5%"
                }}
                color="primary"
                variant="determinate"
                value={30}
              />
            </Grid>
          </Grid>
          <Grid container item style={{ marginLeft: "5%", marginBottom: "5%" }}>
            <Grid
              container
              item
              xs
              direction="row"
              alignItems="center"
              spacing={4}
            >
              <Grid item>
                <img
                  style={{ height: 30, objectFit: "contain" }}
                  src={usFlag}
                  alt="US Flag"
                />
              </Grid>
              <Grid item>
                <Typography> United States </Typography>
              </Grid>
            </Grid>

            {[
              "Age Over 18",
              "ID not expired",
              "Valid document",
              "Background icon"
            ].map(renderRequirement)}
          </Grid>
          <Grid
            container
            item
            direction="row"
            style={{ marginLeft: "5%", marginBottom: "10%" }}
          >
            <Grid item xs={6}>
              <Typography> Selfie Video </Typography>
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "90%",
                  marginTop: "1%",
                  objectFit: "contain"
                }}
                src={personVideo}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography> Government ID </Typography>
              <img
                style={{
                  width: "90%",
                  marginTop: "1%",
                  objectFit: "contain"
                }}
                alt={"ID Document"}
                src={idImage}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            alignItems="space-between"
            style={{ marginLeft: "30%", width: "40%" }}
          >
            <Grid item xs={6} style={{ width: "100%" }}>
              <Button
                style={{ width: "70%" }}
                variant="contained"
                color="secondary"
              >
                Reject
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                style={{ width: "70%" }}
                variant="contained"
                color="primary"
              >
                Approve
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
}
