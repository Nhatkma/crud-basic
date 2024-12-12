const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect( 'mongodb://localhost:27017/products-test')
     
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

module.exports = connect;