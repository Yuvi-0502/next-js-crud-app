import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String
});

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;