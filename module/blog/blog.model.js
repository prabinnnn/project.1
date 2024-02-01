const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisheddate: { type: Date, default: Date.now() },
  categories: { type: Array },
  words: { type: Number, required: true },
  time: { type: Number },
  content: { type: String, required: true },
  featuredimage: { type: String },
  createdat: { type: Number, default: Date.now() },
  updatedat: { type: Number, default: Date.now() },
});

module.exports = model("Blog", BlogSchema);
