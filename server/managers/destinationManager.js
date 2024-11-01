const Destination = require("../models/Destinations");

exports.create = (destinationData) => Destination.create(destinationData);

exports.getAll = (limit, skip) => {
  let query = Comment.find().sort({ createdAt: -1 });
  if (limit) {
    query = query.limit(limit).skip(skip);
  }
  return query;
};

exports.getOne = (destinationId) => Destination.findById(destinationId);

exports.updateById = (destinationsId, destinationData) =>
  Destination.findByIdAndUpdate(destinationsId, destinationData);

exports.delete = (destinationId) =>
  Destination.findByIdAndDelete(destinationId);

exports.countAll = () => Destination.countDocuments();
