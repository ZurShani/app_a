const createPost = (req, res) => {
  res.send("Create Post");
};

const getAllPosts = (req, res) => {
  res.send("Get All Posts");
};

const deletePost = (req, res) => {
  res.send("Delete Post");
};

module.exports = { createPost, getAllPosts, deletePost };
