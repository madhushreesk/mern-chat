const express = require("express");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// router.route("/login", authUser);

router.route("/").post(registerUser).get(protect, allUsers);

module.exports = router;
