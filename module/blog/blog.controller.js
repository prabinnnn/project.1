const Blogmodel = require("./blog.model");

const create = (payload) => {
  return Blogmodel.create(payload);
};

const get = () => {
  return Blogmodel.find();
};

const getById = (id) => {
  return Blogmodel.findOne({ _id: id });
};

const updateById = (id, payload) => {
  return Blogmodel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return Blogmodel.deleteOne({ _id: id });
};

module.exports = { create, get, getById, updateById, remove };
