const { Schema, model } = require("mongoose");
const blogSchema = new Schema({
  title: { type: string },
  author: { type: string },
});
