import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: "mongodb+srv://aayushshuk1a:iamaayush@cluster0.qjldy.mongodb.net/BLOG?retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
