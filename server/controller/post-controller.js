import post from "../Schema/Post-Schema.js";

export const createPost = async (request, response) => {
  try {
    const Post = await new post(request.body);
    Post.save();
    response.status(200).json("blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getAllPosts = async (request, response) => {
  try {
    let posts = await post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    let Post = await post.findById(request.params.id);
    response.status(200).json(Post);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updatePost = async (request, response) => {
  try {
    await post.findByIdAndUpdate(request.params.id, { $set: request.body });
    response.status(200).json("Blog Saved Succes");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const deletePost = async (request, response) => {
  try {
    let Post = await post.findById(request.params.id);
    Post.delete();
    response.status(200).json("Delete");
  } catch (error) {
    response.status(500).json(error);
  }
};
