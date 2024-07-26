import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import connected from "./config/db.js";

import User from "./models/User.js";
import Cart from "./models/Cart.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

connected();

app.get("/", (req, res) => {
  try {
    res.json("hello");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const { limit, category } = req.query;

    let query = Product.find({});

    if (limit) {
      query = query.limit(parseInt(limit));
    }

    if (category) {
      query = query.where("product_category").equals(category);
    }

    const products = await query.sort({ product_rating: -1 }).exec();

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ message: "Id Required" });
    }
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (err) {
    if (err.name === "CastError") {
      // Handle potential database conversion errors
      return res.status(400).json({ message: "Invalid product ID" });
    } else {
      console.error(err.message);
      res.status(500).json({ message: "Server error" });
    }
  }
});

app.get("/subTotal", async (req, res) => {
  try {
    const carts = await Cart.find()
      .sort({
        createdAt: -1,
      })
      .populate("product_id");
    res.json(carts);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ message: "Server error" });
  }
});

app.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const cart = await Cart.findOne({
      product_id: data._id,
      user_id: process.env.USER_ID,
    });

    if (!cart) {
      const newCart = await Cart.create({
        cart_quantity: 1,
        product_id: data._id,
        user_id: process.env.USER_ID,
      });
      res
        .status(201)
        .json({ message: "Cart created successfully", cart: newCart });
    } else {
      cart.cart_quantity += 1;
      await cart.save();
      res.status(200).json({ message: "Cart updated successfully", cart });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// کم کردن تعداد از سبد خرید
app.post("/decrease", async (req, res) => {
  try {
    const data = req.body;
    const cart = await Cart.findOne({ _id: data._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    if (cart.cart_quantity > 1) {
      cart.cart_quantity -= 1;
      await cart.save();
      res.status(200).json({ message: "Cart updated successfully", cart });
    } else {
      await Cart.deleteOne({ _id: cart._id });
      res.status(200).json({ message: "Item removed from cart" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// حذف کامل یک محصول از سبد خرید
app.post("/remove", async (req, res) => {
  try {
    const data = req.body;
    const result = await Cart.deleteOne({
      product_id: data._id,
      user_id: process.env.USER_ID,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

mongoose.connection.once("open", () => {
  console.log("connection to mongodb");
  app.listen(process.env.PORT || 3002);
});
