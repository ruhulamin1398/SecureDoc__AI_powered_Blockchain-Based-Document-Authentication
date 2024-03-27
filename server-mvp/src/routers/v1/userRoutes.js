const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
  verifyUserOtpToken,
  reSendVerificationOTP,
  updateUserToken,
} = require("../../controllers/v1/userController");
const validateToken = require("../../middleware/v1/validateTokenHandler");
const checkUserIsActive = require("../../middleware/v1/userIsActiveHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);
router.post("/resend-verification-email", validateToken, reSendVerificationOTP);
router.get("/verify-user-otp-token", validateToken, verifyUserOtpToken);

router.put("/update-user-token", validateToken, updateUserToken);

module.exports = router;