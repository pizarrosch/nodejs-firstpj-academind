const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./admin');

const rootDir = require('../helpers/path');
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
});

module.exports = router;