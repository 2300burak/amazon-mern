const e = require("express");
const express = require("express");
const router = express.Router();
const authRouter = require("./AuthRouter");
const productsRouter = require("./ProductsRouter");

router.use("/auth",authRouter);
// router.use("/auth", productsRouter);

module.exports = router;