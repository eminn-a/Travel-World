const router = require("express").Router();
const userManager = require("../managers/userManager");

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const result = await userManager.register(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: "some err",
    });
  }
  res.end();
});

router.post("/login", async (req, res) => {
  try {
    const result = await userManager.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      message: err.mesage,
    });
  }
});

router.get("/logout", (req, res) => {
  try {
    //TODO:token validation
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
