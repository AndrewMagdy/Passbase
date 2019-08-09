import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f1f1f1",
    border: 0,
    boxShadow: "0 0 0 #000"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase className={classes.input} />
    </Paper>
  );
}
