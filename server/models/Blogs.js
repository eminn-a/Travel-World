const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length >= 2;
        },
        message: "The images field must contain at least 2 images",
      },
      required: true,
    },
    _ownerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blogs", blogSchema);

module.exports = Blog;
