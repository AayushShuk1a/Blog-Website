import { Grid } from "@material-ui/core";
import React from "react";
import Post from "./Post";

const Posts = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {dummy.map((blog) => (
        <Grid item lg={3} sm={4} xs={12}>
          <Post></Post>
        </Grid>
      ))}
    </>
  );
};

export default Posts;
