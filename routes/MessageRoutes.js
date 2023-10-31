const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/MessageController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
