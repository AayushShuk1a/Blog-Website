import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  link: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  },
});

const NavBar = () => {
  const LogoutHandler = () => {
    localStorage.clear();
    navigate("/auth");
  };
  const navigate = useNavigate();

  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to={"/"} className={classes.link}>
          <Typography>Home</Typography>
        </Link>
        <a
          href="https://aayush-portfolio.netlify.app/"
          className={classes.link}
        >
          <Typography>About</Typography>
        </a>
        <a href="mailto:aayush5emails@gmail.com" className={classes.link}>
          <Typography>Contact</Typography>
        </a>

        {!localStorage.getItem("profile") && (
          <Link to={"/auth"} className={classes.link}>
            <Typography>Login</Typography>
          </Link>
        )}
        {localStorage.getItem("profile") && (
          <Typography style={{ cursor: "pointer" }} onClick={LogoutHandler}>
            Logout
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
