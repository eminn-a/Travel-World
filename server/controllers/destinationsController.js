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
  try {
    const destinations = await destinationManager.getAll(limit);
    res.status(200).json(destinations);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Failed to retrieve destinations",
    });
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
