const express = require("express");
const router = express.Router();
const Product = require("../models/model");

const productsController = {
  homePage: async (req, res) => {
    res.render('home'); // Render trang home.pug
  },
  
  getProduct: async(req, res) => {
    try {
      const product = await Product.find();
      if (Array.isArray(product)) { 
        res.render("show", { product });
      } else {
        res.render("show", { product: [] }); 
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createProduct: async(req,res) => {
    try {
      const { name, price } = req.body; 
      const newProduct = new Product({ name, price });
      const saveProduct = await newProduct.save();
      res.redirect("/"); 
    } catch (error) {
      res.status(500).json(error);
    }
  },
  editProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.render('edit', { product: product });
      } else {
        res.status(404).json("Product not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateProduct: async(req,res) => {
    try {
      const { name, price } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,      
        { name, price },     
        { new: true }       
      );
  
      if (updatedProduct) {
        res.redirect('/');
      } else {
        res.status(404).json("Product not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteProduct: async(req,res) => {
    try {
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      if (deleteProduct) {
        res.redirect('/');
      } else {
        return res.status(404).json("Product not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

};

module.exports = productsController;
