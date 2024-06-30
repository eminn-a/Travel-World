const router = require("express").Router();
const blogManager = require("../managers/blogManager");

router.post("/", async (req, res) => {
  try {
    const blog = await blogManager.create({
      ...req.body,
      _ownerId: req.user._id,
    });

    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Blog not created",
    });
  }
});

router.get("/", async (req, res) => {
  const { limit } = req.query;
  try {
    const blogs = await blogManager.getAll(limit);
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Failed to retrieve blogs",
    });
  }
});

router.get("/:blogId", async (req, res) => {
  try {
    const blog = await blogManager.getOne(req.params.blogId);
    res.status(200).json(blog);
  } catch (error) {
    res.json({
      message: "Something went wrong fetching blog details",
    });
  }
});

router.put("/:blogId", async (req, res) => {
  try {
    const blog = await blogManager.updateById(req.params.blogId, req.body);
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.json({
      message: "Something went wrong updating blog",
    });
  }
});

router.delete("/:blogId", async (req, res) => {
  try {
    const blog = await blogManager.delete(req.params.blogId);
    res.status(200).end(blog);
  } catch (error) {
    res.json({
      message: "Something went wrong deleting blog",
    });
  }
});
module.exports = router;
