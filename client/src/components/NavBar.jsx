import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#ffffff",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "&>*": {
      padding: 20,
    },
  },
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Contact</Typography>
        <Typography>Login</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
