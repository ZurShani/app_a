const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  content: String,
  owner: String,
});
const Posts = mongoose.model("Post", postSchema);
module.exports = Posts;
