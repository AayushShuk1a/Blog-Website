import { Box, makeStyles, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  image: {
    background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
    width: "100%",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      color: "#ffffff",
      lineHeight: 1,
      fontSize: 60,
    },
    "& :last-child": {
      background: "#ffffff",
    },
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.image}>
      <Typography>BLOG</Typography>
      <Typography>Say Your Mind</Typography>
    </Box>
  );
};

export default Banner;
