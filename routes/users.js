const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");

router.get(
  "/getuserconnected",
  authentication,
  UserController.getUserConnected
);
router.get("/getuserbyusername/:username", UserController.getUserByUserName);
router.get("/getuserbyid/:_id", UserController.getUserById);

router.get('/confirm/:email',UserController.confirm)
router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.delete("/logout", authentication, UserController.logout);

module.exports = router;
