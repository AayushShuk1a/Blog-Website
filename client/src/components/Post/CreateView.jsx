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
import { createPost, UploadFile } from "../../Services/API";
import { useNavigate } from "react-router-dom";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
  username: "",
  createData: new Date(),
  categories: "All",
};

const CreateView = () => {
  const options = ["Music", "Tech", "Movies", "Sports", "Fashion"];
  const defaultOption = options[0];

  let navigate = useNavigate();
  const classes = useStyles();
  const [Post, setPost] = useState(initialValue);
  const [File, setFile] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (File) {
        const data = new FormData();
        data.append("name", File.name);
        data.append("file", File);

        const image = await UploadFile(data);
        Post.picture = image.data;

        setImage(image.data);
      }
    };

    fetchData();
  }, [File]);

  const url = Post.picture
    ? Post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const handleChange = (e) => {
    setPost({
      ...Post,
      [e.target.name]: e.target.value,
      username: JSON.parse(localStorage.getItem("profile")).username,
    });
  };

  const postHandler = async () => {
    await createPost(Post);
    navigate("/");
  };

  const dropdownHandler = () => {};

  return (
    <Box className={classes.container}>
      <img src={url} alt="banner" className={classes.image}></img>

      <FormControl className={classes.form}>
        <label htmlFor="addimage">
          <AddCircle fontSize="large" color="action"></AddCircle>
        </label>
        <input
          type="file"
          id="addimage"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        ></input>

        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="title"
          className={classes.textfield}
          name="title"
        ></InputBase>

        <Dropdown
          options={options}
          onChange={dropdownHandler}
          value={defaultOption}
          placeholder="Select an option"
        ></Dropdown>

        <Button
          onClick={() => postHandler()}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      </FormControl>

      <TextareaAutosize
        onChange={(e) => handleChange(e)}
        minRows={5}
        className={classes.textarea}
        placeholder="Tell Your Story..."
        name="description"
      ></TextareaAutosize>
    </Box>
  );
};

export default CreateView;
