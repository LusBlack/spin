const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),  // Use require.main.filename
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseErr) {
          console.log("Error parsing JSON in save():", parseErr);
        }
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        if (err) {
          console.log("Error writing file:", err);
        }
      });
    });
  }

  static fetchAll(cb) {
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
};
