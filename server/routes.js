const router = require("express").Router();

const userController = require("./controllers/userController");
const destinationsController = require("./controllers/destinationsController");
const blogController = require("./controllers/blogController");

router.use("/users", userController);
router.use("/destinations", destinationsController);
router.use("/blogs", blogController);

module.exports = router;
