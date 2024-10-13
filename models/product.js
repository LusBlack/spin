const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),  
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log("Error reading file in fetchAll():", err);
      return cb([]);  
    }

    if (fileContent.length === 0) {
      console.log("File is empty, returning empty array.");
      return cb([]);
    }


    try {
      console.log("File content:", fileContent.toString());  
      const products = JSON.parse(fileContent);
      cb(products);
    } catch (parseErr) {
      console.log("Error parsing JSON in fetchAll():", parseErr);
      cb([]);
    }
  }); 
}

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products, null, 2), err => {
        if (err) {
          console.log("Error writing file:", err);
        }
      });
    });
    fs.readFile(p, (err, fileContent) => {});
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }

  
};
