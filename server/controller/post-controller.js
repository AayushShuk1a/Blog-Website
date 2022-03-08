import post from "../Schema/Post-Schema.js";

export const createPost = async (request, response) => {
  console.log(request.body);
  try {
    const Post = await new post(request.body);
    Post.save();
    response.status(200).json("blog saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
