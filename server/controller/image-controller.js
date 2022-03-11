import grid from "gridfs-stream";
import mongoose from "mongoose";

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

const url = "http://localhost:8000";

export const UploadImage = async (request, response) => {
  try {
    if (!request.file) {
      return response.status(404).json("File not found");
    }

    const imageURl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageURl);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    console.log(request.params.filename);
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(response);
  } catch (error) {
    console.log(error);
    response.status(500).json("Failed to Get image", error);
  }
};
