const route = require("express").Router();

const productsController = require("../controllers/indexController");

route.post("/create",productsController.createProduct);
route.get("/",productsController.getProduct);
route.get("/:id",productsController.getProductById);
route.put("/:id",productsController.updateProduct);
route.delete("/:id",productsController.deleteProduct);

module.exports = route;