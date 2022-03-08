import mongoose from "mongoose";

const connection = async () => {
  const URL =
    "mongodb+srv://aayushshuk1a:iamaayush@cluster0.qjldy.mongodb.net/BLOG?retryWrites=true&w=majority";

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected To MongoDb");
  } catch (error) {
    console.log("Error While Connecting to MongoDb", error);
  }
};

export default connection;
