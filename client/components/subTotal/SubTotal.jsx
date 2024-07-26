"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { MdClose } from "react-icons/md";

const SubTotal = () => {
  const [data, setData] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/subTotal");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePost = async (itemId) => {
    setIsPosting(true);
    try {
      await axios.post(`${process.env.MAIN_URL}/decrease`, { _id: itemId });

      // Refresh data after successful post
      const response = await axios.get("http://localhost:3000/subTotal");
      setData(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      setIsPosting(false);
    }
  };

  const columns = [
    { label: "Products", key: "product_image", type: "image" },
    { label: "Title", key: "product_name" },
    { label: "Price", key: "product_price" },
    { label: "Quantity", key: "cart_quantity" },
    { label: "Total", key: "total", calculate: true },
    {
      label: "Remove",
      key: "remove",
      static: true,
    },
  ];

  return (
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-6">
        {columns.map((column) => (
          <div key={column.label} className="flex flex-col items-center ">
            <label className="font-bold mb-2 bg-stone-200 border-y-[1px] border-gray-500 w-full flex justify-center py-5">
              {column.label}
            </label>
            <div className="h-[5rem] text-stone-700">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="mb-2 flex items-center justify-center w-full h-full"
                >
                  {column.type === "image" ? (
                    <Image
                      src={item.product_id[column.key]}
                      width={50}
                      height={50}
                      alt={item.product_id.product_name}
                    />
                  ) : column.calculate ? (
                    "$" +
                    (
                      item.product_id.product_price * item.cart_quantity
                    ).toFixed(2)
                  ) : column.static ? (
                    <MdClose
                      size={40}
                      className="text-stone-700 p-3 hover:bg-stone-700 hover:text-white duration-150 cursor-pointer rounded-full"
                      onClick={() => handlePost(item._id)}
                    />
                  ) : (
                    item.product_id[column.key] || item[column.key]
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubTotal;
