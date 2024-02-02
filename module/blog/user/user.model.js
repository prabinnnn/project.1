const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, default: Date.now() },
  phoneno: { type: Number, default: Date.now() },
  dateofbirth: { type: Date, required: true },
  createdat: { type: Number, default: Date.now() },
  updatedat: { type: Number, default: Date.now() },
});
module.exports = model("user", userSchema);
