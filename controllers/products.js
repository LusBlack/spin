const Product = require('../models/product');


exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { 
      pageTitle: 'Add product', 
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};