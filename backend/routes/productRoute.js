const express = require('express');
const { getAllProducts } = require('../controller/projectController');


const router = express.Router();

router.route("/products").get(getAllProducts);
console.log("productrouter")

module.exports = router;