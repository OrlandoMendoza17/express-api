const { getFakeDB, findProduct, findIndex } = require("../utils");

class ProductsServices {

  constructor() {
    this.products = getFakeDB()
  }

  getAll() {
    return this.products;
  }

  findOne(productId) {
    const foundProduct = findProduct(productId, this.products)
    if (foundProduct) {
      return foundProduct;
    }

    return ({ message: `Product "${productId}" doesn't exist` })
  }

  updateOne(productId, newProperties) {
    const foundIndex = findIndex(productId, this.products)
    
    if(foundIndex !== -1){
      const foundProduct = findProduct(productId, this.products)

      const newProduct = {
        id: productId,
        ...foundProduct,
        ...newProperties
      }
      
      this.products[foundIndex] = newProduct;
      
      return newProduct;
    }

    return ({ message: `Product "${productId}" doesn't exist` })
  }

  deleteOne(productId) {
    const foundIndex = findItemIndex(productId, this.products)

    if (foundIndex !== -1) {
      this.products.splice(foundIndex, 1)
      return ({ message: `Product "${productId}" has been deleted` })
    }

    return ({ message: `Product "${productId}" doesn't exist` })
  }
}

module.exports = ProductsServices;