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
    textAlign: "center",
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
    overflow: "scroll",
  },
});
const Post = (props) => {
  const classes = useStyles();

  const Category =
    props.post.categories.length > 1
      ? props.post.categories[1]
      : props.post.categories[0];

  const url = props.post.picture
    ? props.post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";
  return (
    <Box className={classes.container}>
      <img src={url} alt="Blog" className={classes.image}></img>
      <Typography className={classes.textcolor}>{Category}</Typography>
      <Typography className={classes.title}>{props.post.title}</Typography>
      <Typography className={classes.textcolor}>
        {props.post.username}
      </Typography>
      <Typography className={classes.detail}>
        {props.post.description}
      </Typography>
    </Box>
  );
};

export default Post;
