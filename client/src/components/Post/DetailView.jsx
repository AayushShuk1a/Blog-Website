import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    padding: 5,
    margin: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 20px 0 ",
  },
  subheading: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const DetailView = () => {
  const classes = useStyles();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image}></img>
      <Box className={classes.icons}>
        <Link to="/update">
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete className={classes.icon} color="error" />
      </Box>

      <Typography className={classes.heading}>Ed Sheeran</Typography>

      <Box className={classes.subheading}>
        <Typography>
          Author:<span style={{ fontWeight: 600 }}>Aayush Shukla</span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>7 March 2022</Typography>
      </Box>
      <Typography>
        ÷ is the third studio album by English singer-songwriter Ed Sheeran. It
        was released on 3 March 2017 through Asylum Records and Atlantic
        Records. "Castle on the Hill" and "Shape of You" were released as the
        album's lead singles on 6 January 2017.
      </Typography>
    </Box>
  );
};

export default DetailView;
