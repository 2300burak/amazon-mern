const express = require("express");
const router = express.Router();
const authController = require("../controllers/AuthController");

router.post("/register",authController.authRegister);

router.post("/login",authController.authLogin);

module.exports = router;
