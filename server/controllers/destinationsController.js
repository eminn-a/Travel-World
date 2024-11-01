const router = require("express").Router();
const destinationManager = require("../managers/destinationManager");

router.post("/", async (req, res) => {
  console.log(req.user);
  try {
    const destination = await destinationManager.create({
      ...req.body,
      _ownerId: req.user._id,
    });

    res.status(201).json(destination);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Destination not created",
    });
  }
});

router.get("/", async (req, res) => {
  const { limit } = req.query;
  const page = Number(req.query.page);
  const startIndex = (page - 1) * limit;

  try {
    total = await commentService.countAll();
    destinations = await commentService.getAll(limit, startIndex);

    res.json({
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      destinations,
    });
  } catch (error) {
    res.status(400).json({ message: "Грешка коментари!" });
  }
});

router.get("/:destinationId", async (req, res) => {
  try {
    const destination = await destinationManager.getOne(
      req.params.destinationId
    );
    res.status(200).json(destination);
  } catch (error) {
    res.json({
      message: "Something went wrong fetching destination details",
    });
  }
});

router.put("/:destinationId", async (req, res) => {
  try {
    const destination = await destinationManager.updateById(
      req.params.destinationId,
      req.body
    );
    res.status(200).json(destination);
  } catch (error) {
    res.json({
      message: "Something went wrong updating destination",
    });
  }
});

router.delete("/:destinationId", async (req, res) => {
  try {
    const destination = await destinationManager.delete(
      req.params.destinationId
    );
    res.status(200).end(destination);
  } catch (error) {
    res.json({
      message: "Something went wrong deleting destination",
    });
  }
});
module.exports = router;
