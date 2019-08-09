import React, { useState } from "react";
import {
  Grid,
  Button,
  FormControl,
  Box,
  Typography,
  Hidden
} from "@material-ui/core";
import CustomizedInputBase from "../common/customTextbox";
import checkImage from "../../assets/checkmark_white.png";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  leftContainer: {
    height: "100vh",
    width: "60vw",
    backgroundColor: "#014eff",
    backgroundImage:
      'url("https://app.passbase.com/assets/misc/blue-circle-background-acd243975dd2d9907279d754b2ffa2a0482e49f41845ec58c5000feb7b67f4b7.png")',
    backgroundRepeat: "no-repeat"
  },
  rightContainer: { height: "100vh", backgroundColor: "white" },
  registerContainer: { marginTop: "2vh" },
  footer: {
    position: "relative",
    top: "58vh",
    right: "20%",
    width: "50%"
  },
  featuresContainer: { width: "50%" },
  formContainer: { marginTop: "20vh", marginLeft: "28%", marginRight: "28%" },
  checkImage: {
    height: 35,
    marginRight: 20,
    objectFit: "contain"
  },
  loginButton: {
    margingTop: "2vh",
    marginBottom: "1vh",
    width: "40%",
    fontWeight: "700"
  }
}));

const Login = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [didFailLogin, setDidFailLogin] = useState(false);

  const featuresList = [
    "Bank-level Security",
    "No Credit Card required",
    "GDPR compliant"
  ];

  const handleLogin = async () => {
    const result = await axios.post(process.env.REACT_APP_API_END_POINT, {
      user: email,
      password: password
    });

    if (result.data && result.data.valid) {
      history.push("dashboard");
      setDidFailLogin(false);
    } else {
      setDidFailLogin(true);
    }
  };

  return (
    <Grid container direction="row">
      <Hidden mdDown>
        <Grid
          className={classes.leftContainer}
          container
          item
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            className={classes.footer}
          >
            <Typography component={"span"} variant={"caption"}>
              <Box color="primary.contrastText">PassBase</Box>
            </Typography>
            <Typography component={"span"} variant={"caption"}>
              <Box color="grey.500">Terms & Conditions </Box>
            </Typography>
            <Typography component={"span"} variant={"caption"}>
              <Box color="grey.500">Privacy Policy</Box>
            </Typography>
            <Typography component={"span"} variant={"caption"}>
              <Box color="grey.500">About Us</Box>
            </Typography>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            className={classes.featuresContainer}
          >
            {featuresList.map(feature => (
              <Grid
                container
                item
                alignItems="center"
                justify="flex-start"
                style={{ marginBottom: 40 }}
                xs
                key={feature}
              >
                <img
                  className={classes.checkImage}
                  alt={"Check Mark"}
                  src={checkImage}
                />

                <Typography component={"span"} variant={"h6"}>
                  <Box fontWeight="fontWeightBold" color="primary.contrastText">
                    {feature}
                  </Box>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Hidden>

      <Grid
        container
        direction="column"
        item
        xs
        className={classes.rightContainer}
      >
        <Grid
          container
          item
          justify="flex-end"
          className={classes.registerContainer}
        >
          <Typography variant={"caption"}>
            <Box color="grey.500">New? Register Now</Box>
          </Typography>
        </Grid>

        <Grid container item direction="column" style={{}}>
          <FormControl className={classes.formContainer}>
            <Typography
              component={"span"}
              variant={"h5"}
              style={{ marginBottom: "4vh" }}
            >
              <Box textAlign="left" fontWeight="700">
                Please Login
              </Box>
            </Typography>
            <Typography
              component={"span"}
              style={{ margingTop: "2vh", marginBottom: "2vh" }}
            >
              <Box fontWeight="400">Business Email</Box>
            </Typography>

            <CustomizedInputBase onChange={ev => setEmail(ev.target.value)} />

            <Typography
              component={"span"}
              style={{ paddingTop: "1vh", paddingBottom: "2vh" }}
            >
              <Box fontWeight="400">Password</Box>
            </Typography>

            <CustomizedInputBase
              onChange={ev => setPassword(ev.target.value)}
              isPassword={true}
            />
            <Typography
              component={"span"}
              style={{ margingTop: "2vh", marginBottom: "2vh" }}
            >
              <Box textAlign="left">Forgot Password? Reset here</Box>
            </Typography>

            <Grid container item justify="center">
              <Button
                onClick={handleLogin}
                variant="contained"
                color="primary"
                className={classes.loginButton}
              >
                Login
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={didFailLogin}
        autoHideDuration={6000}
        message={<span id="message-id">Login Failed</span>}
      />
    </Grid>
  );
};

export default withRouter(Login);
