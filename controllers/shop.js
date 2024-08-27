const adminData = require('./products');

exports.shop = (res) => {
    const products = adminData.products;
   res.render('shop',
    {prods: products,  
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
    });
}