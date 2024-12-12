const express = require("express");
const router = express.Router();
const Product = require("../models/model");

const productsController = {
  
  getProduct: async(req,res)=>{
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getProductById: async(req,res)=>{
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json(product);
        
      }else{
        return res.status(404).json("Product not found" );
      }
      
      
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createProduct: async(req,res)=>{
    try {
      const newProduct = new Product(req.body);
      const saveProduct = await newProduct.save();
      res.status(201).json(saveProduct);
      
    } catch (error) {
      res.status(500).json(error);
      
    }

  },
  updateProduct:async(req,res)=>{
    try {
      const updateProduct = await Product.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true }
      );
      
      if (updateProduct) {
        res.status(200).json(updateProduct);
        
      }
      return res.status(404).json( "Product not found");
      
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteProduct : async(req,res)=>{
    try {
     
      const deleteProduct = await Product.findByIdAndDelete(req.params.id);
      if (deleteProduct) {
        res.status(200).json("Delete success");
        
      }else{
        return res.status(404).json("Product not found" );
      }
      
    } catch (error) {
      res.status(500).json(error);
    }
  }
 
}
module.exports = productsController;