import ProductImages from "@/components/product/ProductImages";
import max_width from "../../../components/styles.module.css";
import RouteLinks from "@/components/routeLinks/RouteLinks";
import Desc from "@/components/womanRoute/desc/Desc";
const ProductDetails = dynamic(
  () => import("../../../components/product/ProductDetails"),
  { ssr: false }
);

import axios from "axios";

import dynamic from "next/dynamic";

import "dotenv/config";

const ProductPage = async ({ params }) => {
  const { data } = await axios.get(
    `${process.env.MAIN_URL}products/${params.id}`
  );

  const category = ["Woman", "Man", "Kid"];

  const route = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    {
      title:
        data.product_category.find((cat) => category.includes(cat)) ||
        "Category",
      path: `/product/${
        data.product_category
          .find((cat) => category.includes(cat))
          ?.toLowerCase() || "category"
      }`,
    },
    { title: `${data.product_name}`, path: `/products/${data._id}` },
  ];

  return (
    <div>
      <div className={`${max_width.max_width} `}>
        <div>{<RouteLinks route={route} />}</div>

        <div className="flex justify-between max-lg:flex-col">
          <ProductImages
            images={data.product_rt}
            mainImage={data.product_image}
            nameProduct={data.product_name}
            path={data._id}
          />
          <ProductDetails data={data} />
        </div>

        <div className="my-16">
          <Desc detail={data.product_description} />
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }) {
  const { data } = await axios.get(
    `${process.env.MAIN_URL}products/${params.id}`
  );

  return {
    title: data.product_name,
    description: data.product_description,
    openGraph: {
      title: data.product_name,
      description: data.product_description,
      images: [data.product_image],
    },
  };
}

export default ProductPage;
