const router = require("express").Router();

const userController = require("./controllers/userController");
const destinationsController = require("./controllers/destinationsController");
const blogController = require("./controllers/blogController");

router.use("/users", userController);
router.use("/data/destinations", destinationsController);
router.use("/data/blogs", blogController);

module.exports = router;
