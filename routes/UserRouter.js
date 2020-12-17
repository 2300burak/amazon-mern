const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const validations = require("../middleWare/validationMW")
const auth = require("../middleWare/jwt")

//route=> /user

router.post("/register",validations.emailPasswordValidation,UserController.userRegister);

router.post("/login",validations.emailPasswordValidation,UserController.userLogin);

router.get("/profile",auth,UserController.getProfile)



module.exports = router;
