const Destination = require("../models/Destinations");

exports.create = (destinationData) => Destination.create(destinationData);

exports.getAll = (limit) => {
  const query = Destination.find().sort({ createdAt: -1 });
  if (limit > 0) {
    query.limit(limit);
  }
  return query;
};

exports.getOne = (destinationId) => Destination.findById(destinationId);

exports.updateById = (destinationsId, destinationData) =>
  Destination.findByIdAndUpdate(destinationsId, destinationData);

exports.delete = (destinationId) =>
  Destination.findByIdAndDelete(destinationId);
