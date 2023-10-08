const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../helpers/path');
const {request} = require("express");
const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
  products.push({title: req.body.title});
  res.redirect('/');
})

exports.router = router;
exports.products = products;