const Blog = require("../models/Blogs");

exports.create = (blogData) => Blog.create(blogData);

exports.getAll = (limit) => {
  const query = Blog.find().sort({ createdAt: -1 });
  if (limit > 0) {
    query.limit(limit);
  }
  return query;
};

exports.getOne = (blogId) => Blog.findById(blogId);

exports.updateById = (blogId, blogData) =>
  Blog.findByIdAndUpdate(blogId, blogData);

exports.delete = (blogId) => Blog.findByIdAndDelete(blogId);
