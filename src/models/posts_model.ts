import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  content: String,
  owner: String,
});
const Posts = mongoose.model("Post", postSchema);
export default Posts;
