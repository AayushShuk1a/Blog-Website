import axios from "axios";

const url = "http://localhost:8000";

export const createPost = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while Calling API", error);
  }
};

export const getAllPosts = async () => {
  try {
    let response = await axios.get(`${url}/posts`);
    return response.data;
  } catch (error) {
    console.log("Error while Calling getAllPost API ", error);
  }
};

export const getPost = async (id) => {
  try {
    let response = await axios.get(`${url}/details/${id}`);

    return response.data;
  } catch (error) {
    console.log("Error While calling getPost API");
  }
};

export const UpdatePost = async (id, post) => {
  try {
    return await axios.post(`${url}/update/${id}`, post);
  } catch (error) {
    console.log("Failed When Calling UpdatePost API", error);
  }
};
