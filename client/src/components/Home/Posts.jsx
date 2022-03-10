import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts } from "../../Services/API";

const Posts = () => {
  const [posts, setposts] = useState([]);

  // const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts();
      console.log(data);
      setposts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Grid item lg={3} sm={4} xs={12}>
          <Link
            to={`/details/${post._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Post key={post.title} post={post}></Post>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Posts;
