import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      require: true,
    },
    product_description: {
      type: String,
      require: true,
    },
    product_category: {
      type: [String],
      require: true,
    },
    product_price: {
      type: Number,
      require: true,
    },
    product_image: {
      type: String,
      require: true,
    },
    product_inventory: {
      type: Number,
      require: true,
      default: 1,
      min: 0,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    cart_quantity: {
      type: Number,
      require: true,
      default: 0,
      min: 0,
    },
    product_rating: {
      type: Number,
      require: true,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
