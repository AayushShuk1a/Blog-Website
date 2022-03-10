import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../Services/API";

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

const DetailView = ({ match }) => {
  const classes = useStyles();
  const [post, setpost] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(id);
      console.log(data);
      setpost(data);
    };

    fetchData();
  }, [id]);

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <Box className={classes.container}>
      <img
        src={post.picture || url}
        alt="banner"
        className={classes.image}
      ></img>
      <Box className={classes.icons}>
        <Link to="/update">
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete className={classes.icon} color="error" />
      </Box>

      <Typography className={classes.heading}>{post.title}</Typography>

      <Box className={classes.subheading}>
        <Typography>
          Author:<span style={{ fontWeight: 600 }}>{post.username}</span>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createData).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailView;
