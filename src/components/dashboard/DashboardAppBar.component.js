import React from "react";
import { Chip, Box } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../themeColors";

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
  toolbar: theme.mixins.toolbar
}));

const DashboardAppBar = () => {
  const classes = useStyles();

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
                    index === 0 && `4px solid ${colors.primaryColors.blue}`,
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
                {index === 0 && (
                  <Box fontWeight={700}>
                    <Chip color="primary" size="small" label="25" />
                  </Box>
                )}
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default DashboardAppBar;
