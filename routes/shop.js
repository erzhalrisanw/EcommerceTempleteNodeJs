const express = require("express");
const path = require("path");
const isAuth = require('../middleware/is-auth');
const shopController = require("../controllers/shopController");
const router = express.Router();

router.get("/", shopController.getIndexPage);

router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);
router.post("/cart", isAuth, shopController.postCart);
router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);
router.post("/create-order", isAuth, shopController.postOrder);
router.get("/orders", isAuth, shopController.getOrders);

// router.get("/checkout", shopController.getCheckout);

module.exports = router;