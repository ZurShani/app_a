const Posts = require("../models/posts_model");
const { ObjectId } = require("mongodb");

const createPost = (req, res) => {
  console.log(req.body);
  Posts.create(req.body)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getAllPosts = async (req, res) => {
  const filter = req.query;
  console.log(filter);
  try {
    if (filter.owner) {
      const posts = await Posts.find({ owner: filter.owner });
      return res.status(200).json(posts);
    } else {
      const posts = await Posts.find();
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const post = await Posts.findById(id);
      if (post) {
        return res.send(post);
      } else {
        return res.status(404).send("Post not found");
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  } else {
    return res.status(400).send("Invalid ID");
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  await Posts.findByIdAndDelete(postId)
    .then((post) => {
      if (post) {
        return res.status(200).send("Post deleted");
      } else {
        return res.status(404).send("Post not found");
      }
    })
    .catch((error) => {
      return res.status(400).send(error.message);
    });
};

module.exports = { createPost, getAllPosts, deletePost, getPostById };
