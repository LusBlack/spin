const products =[];

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
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