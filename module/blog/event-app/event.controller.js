const eventmodel = require("./event.model");
const create = (payload) => {
  return eventmodel.create(payload);
};
const get = () => {
  return eventmodel.find();
};
const getById = (id) => {
  return eventmodel.findOne(id);
};
const updateById = (id, payload) => {
  return eventmodel.updateOne({ id }, payload);
};
const remove = (id) => {
  return eventmodel.deleteOne(id);
};
module.exports = { create, get, getById, updateById, remove };
