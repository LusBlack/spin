const fs = require('fs');
const path = require('path');

const getProductsFromFile = () => {
  const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log("Error reading file in fetchAll():", err);
      return cb([]);  // Return early if there's an error
    }

    try {
      console.log("File content:", fileContent.toString());  // Log the file content for debugging
      const products = JSON.parse(fileContent);
      cb(products);
    } catch (parseErr) {
      console.log("Error parsing JSON in fetchAll():", parseErr);
      cb([]);
    }
  }); 
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile();
    const p = path.join(
      path.dirname(require.main.filename),  // Use require.main.filename
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) {
          console.log("Error writing file:", err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
