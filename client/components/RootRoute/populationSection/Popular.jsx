import Image from "next/image";
import axios from "axios";

import CountProducts from "@/components/womanRoute/countProducts/CountProducts";

import "dotenv/config";
import Link from "next/link";
import getDiscountedPrice from "@/discount";

const Popular = async ({
  limitProducts,
  categoryProducts,
  titleProducts,
  showCount,
}) => {
  let data;

  if (limitProducts && categoryProducts) {
    data = await axios.get(
      `${process.env.MAIN_URL}api/products?limit=${limitProducts}&category=${categoryProducts}`
    );
  } else if (categoryProducts) {
    data = await axios.get(
      `${process.env.MAIN_URL}api/products?category=${categoryProducts}`
    );
  } else if (limitProducts) {
    data = await axios.get(
      `${process.env.MAIN_URL}api/products?limit=${limitProducts}`
    );
  } else {
    data = await axios.get(`${process.env.MAIN_URL}api/products`);
  }

  const count = data.data.length;

  return (
    <div>
      {showCount == true ? (
        <div>
          <CountProducts count={count} />
        </div>
      ) : (
        ""
      )}

      {titleProducts === "empty" ? (
        ""
      ) : (
        <h2 className="text-4xl m-auto flex flex-col items-center pb-[4rem] font-medium border-gray-500 w-[30rem]">
          {titleProducts}
          <p className="w-full h-[3px] mt-2 bg-gradient-to-r from-white via-purple-500 to-white"></p>
        </h2>
      )}

      <div className="grid grid-cols-6 gap-5 text-stone-700 max-xl:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        {data.data.map((item, index) => (
          <Link
            href={`/products/${item._id}`}
            key={index}
            className="flex flex-col items-center pb-5"
          >
            <div className="border-2 group cursor-pointer border-stone-300 overflow-hidden shadow-xl rounded-2xl pb-5">
              <Image
                src={item.product_image}
                className="rounded-t-2xl group-hover:scale-105 duration-200"
                width={300}
                height={500}
              />

              <div className="px-3 bg-white">
                <h2 className="pt-5 pb-1">{item.product_name}</h2>
                <div className="flex space-x-3">
                  <h3 className="font-medium text-lg">
                    $
                    {process.env.ISDISCOUNT === "true"
                      ? getDiscountedPrice(item.product_price)
                      : item.product_price}
                  </h3>

                  {process.env.ISDISCOUNT === "true" && (
                    <h3 className="line-through line-through-black decoration-rose-500 text-rose-500 font-medium text-lg">
                      {item.product_price}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
