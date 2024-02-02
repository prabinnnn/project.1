const { Schema, model } = require("mongoose");
const eventSchema = new Schema({
  title: { type: String },
});
module.exports = model("event", eventSchema);
