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
