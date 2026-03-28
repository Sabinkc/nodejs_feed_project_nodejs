const express = require("express");
const postModel = require("./models/post_model");
const multer = require("multer");
const uploadFile = require("./services/storage_service");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  const caption = req.body.caption;
  await postModel.create({
    image: result.url,
    caption: caption,
  });
  res.status(201).json({
    message: "Post created successfully",
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts,
  });
});

module.exports = app;
