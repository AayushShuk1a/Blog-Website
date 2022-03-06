import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    border: "1px solid #d3cede",
    borderRadius: 10,
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: 350,
    "&>*": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  },
  textcolor: {
    fontSize: 12,
    color: "#878787",
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
    overflow: "scroll",
  },
});
const Post = () => {
  const classes = useStyles();
  const url =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <Box className={classes.container}>
      <img src={url} alt="Blog" className={classes.image}></img>
      <Typography className={classes.textcolor}>Music</Typography>
      <Typography className={classes.title}>Ed Sheeran</Typography>
      <Typography className={classes.textcolor}>Aayush Shukla</Typography>
      <Typography className={classes.detail}>
        ÷ is the third studio album by English singer-songwriter Ed Sheeran. It
        was released on 3 March 2017 through Asylum Records and Atlantic
        Records.
      </Typography>
    </Box>
  );
};

export default Post;
