"use client";

import axios from "axios";

import { useEffect, useState } from "react";
import Link from "next/link";

import { FaStar } from "react-icons/fa6";

import "dotenv/config";
import getDiscountedPrice from "@/discount";

const ProductDetails = ({ data }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isPosting, setIsPosting] = useState(false); // Track posting state

  const isDiscount = process.env.NEXT_PUBLIC_ISDISCOUNT === "true";

  const handlePost = async () => {
    setIsPosting(true); // Set loading indicator for UI
    try {
      await axios.post(`${process.env.MAIN_URL}/add`, data);
      console.log("Data posted successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsPosting(false); // Reset loading indicator after success/failure
    }
  };

  return (
    <div className="space-y-3 p-4 w-full">
      <h1 className="text-2xl font-medium">{data.product_name}</h1>

      <div>
        <div className="flex space-x-3">
          <h3 className="font-medium text-lg">
            $
            {isDiscount
              ? getDiscountedPrice(data.product_price)
              : data.product_price.toFixed(2)}
          </h3>
          {isDiscount && (
            <h3 className="line-through decoration-rose-500 text-rose-500 font-medium text-lg">
              ${data.product_price.toFixed(2)}
            </h3>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p>(123)</p>
      </div>

      <div className="space-y-3">
        <p>Select Size:</p>

        <div className="flex text-lg space-x-3 font-medium">
          {data.product_sizes.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedSize(item)}
              className={`w-[4rem] h-[4rem] flex cursor-pointer items-center justify-center border-[1px] ${
                selectedSize === item
                  ? "border-stone-800 bg-stone-800 text-white"
                  : "border-stone-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex min-w-[13rem] max-w-[50rem] flex-col space-y-3">
          <button
            onClick={handlePost}
            className={`bg-white w-full flex justify-center py-3 hover:border-[1px] hover:bg-black hover:text-white hover:border-stone-500 duration-100 ${
              isPosting
                ? "bg-gray-200 cursor-wait"
                : "border-[1px] border-stone-200"
            }`}
            disabled={isPosting} // Disable button while posting
          >
            <Link href="" className="w-full">
              {isPosting ? "Posting..." : "ADD TO CART"}
            </Link>
          </button>

          <button className="bg-stone-800 text-white w-full flex justify-center py-3 border-[1px] hover:border-[1px] hover:border-stone-500 hover:text-white hover:bg-black border-white duration-100">
            <Link href="/subTotal" className="w-full">
              BUY IT NOW
            </Link>
          </button>
        </div>

        <div>
          <p className="flex space-x-1">
            <span>Category:</span>
            {data.product_category.map((item, index) => (
              <p key={index}>
                {index > 0 ? "|" : ""} {item}{" "}
              </p>
            ))}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
