const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const {
  authentication,
  isAdmin,
  isSuperAdmin,
} = require("../middlewares/authentication");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.delete("/logout", authentication, UserController.logout);

module.exports = router;
