const router = require("express").Router();

const userController = require("./controllers/userController");
const destinationsController = require("./controllers/destinationsController");

router.use("/users", userController);
router.use("/data/destinations", destinationsController);

module.exports = router;
