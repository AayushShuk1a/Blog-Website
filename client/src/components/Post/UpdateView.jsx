import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  makeStyles,
  InputBase,
  Button,
  TextareaAutosize,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { getPost, UpdatePost } from "../../Services/API";
import { useNavigate, useParams } from "react-router-dom";

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
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  textfield: {
    flex: 1,
    fontSize: 25,
    margin: "0 30px",
  },
  textarea: {
    width: "100%",
    marginTop: 50,
    fontSize: 18,
    border: "none",
    "&:focus-visible": { outline: "none" },
  },
}));

const initialValue = {
  title: "",
  description: "",
  picture: "",
  username: "Aayush Shukla",
  createData: new Date(),
  categories: "All",
};

const UpdateView = () => {
  let navigate = useNavigate();
  const classes = useStyles();

  const [Post, setPost] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(id);
      console.log(data);
      setPost(data);
    };

    fetchData();
  }, []);

  const ChangeHandler = (e) => {
    setPost({ ...Post, [e.target.name]: e.target.value });
  };

  const updateVlog = async () => {
    await UpdatePost(id, Post);
    navigate(`/details/${id}`);
  };

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image}></img>

      <FormControl className={classes.form}>
        <AddCircle fontSize="large" color="action"></AddCircle>
        <InputBase
          placeholder="title"
          className={classes.textfield}
          value={Post.title}
          onChange={(e) => ChangeHandler(e)}
          name="title"
        ></InputBase>
        <Button onClick={updateVlog} variant="contained" color="primary">
          Update
        </Button>
      </FormControl>

      <TextareaAutosize
        minRows={5}
        className={classes.textarea}
        defaultValue={Post.description}
        onChange={(e) => ChangeHandler(e)}
        name="description"
      ></TextareaAutosize>
    </Box>
  );
};

export default UpdateView;
