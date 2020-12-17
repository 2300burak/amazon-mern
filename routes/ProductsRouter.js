const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

//baseurl=> /product

router.get("/homepage",ProductController.getProducts);

router.get("/detail/:id",ProductController.getDetails);

router.post('/addProduct', ProductController.addProduct);

router.get('/deleteProduct/:id', ProductController.deleteProduct);

router.get("/checkout/:id",ProductController.getCheckoutList);





module.exports = router;