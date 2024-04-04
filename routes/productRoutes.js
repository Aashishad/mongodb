const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const router = express.Router();




router.route('/api/v1/products').get(getAllProducts).post(getAllProducts);
router.route('/api/v1/products').patch(getAllProducts).delete(getAllProducts);

// router.get('/api/v1/products', (req, res) => {
//   return getAllProducts(req, res);
// });


module.exports = router;