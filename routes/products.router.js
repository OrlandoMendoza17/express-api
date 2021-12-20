const express = require("express");
const router = express.Router()
const ProductsServices = require("../services/products.services");

const products = new ProductsServices()

router.get("/", (request, response, next) => {
  response.json(products.getAll())
})

router.get("/:id", (request, response, next) => {
  response.json(products.findOne(request.params.id))
})

router.put("/:id", (request, response, next) => {
  const productId = request.params.id;
  const newProperties = request.body;
  
  response.json(products.updateOne(productId, newProperties))
})

router.delete("/:id", (request, response) => {
  response.json(products.deleteOne(request.params.id))
})

module.exports = router