import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  order_quantity: {
    type: Number,
    min: 0,
    max: 100,
    require: true,
    default: 1,
  },
  order_total_price: {
    type: Number,
    require: true,
  },
  order_status: {
    type: String,
    require: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
