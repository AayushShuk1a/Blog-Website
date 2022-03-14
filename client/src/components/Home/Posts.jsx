import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts } from "../../Services/API";
import { useLocation } from "react-router-dom";

const Posts = () => {
  const [posts, setposts] = useState([]);

  const { search } = useLocation();

  // const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search);
      console.log(data);
      setposts(data);
    };

    fetchData();
  }, [search]);

  return (
    <>
      {posts.map((post) => (
        <Grid key={post._id} item lg={3} sm={4} xs={12}>
          <Link
            to={`/details/${post._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Post post={post}></Post>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Posts;
