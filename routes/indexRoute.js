const route = require("express").Router();

const productsController = require("../controllers/indexController");

route.post("/create",productsController.createProduct);
route.get("/create", (req, res) => res.render("create")); 
route.get("/",productsController.homePage);
route.get("/show",productsController.getProduct);
route.get("/edit/:id", productsController.editProduct)
route.post("/edit/:id",productsController.updateProduct);
route.delete("/delete/:id",productsController.deleteProduct);

module.exports = route;