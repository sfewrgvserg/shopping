import axios from "axios";

import "dotenv/config";

import Popular from "@/components/RootRoute/populationSection/Popular";
import FirstLook from "@/components/RootRoute/mainSection/FirstLook";
import Header from "@/components/RootRoute/Header/Header";
import Banner from "@/components/RootRoute/banner/Banner";
import Subscribe from "@/components/RootRoute/subscribe/Subscribe";
import Footer from "@/components/RootRoute/footer/Footer";

import max_width from "@/components/styles.module.css";

const page = async () => {
  const productData = await axios.get(
    `${process.env.MAIN_URL}api/products?limit=2&category=Kid`
  );

  const limitProducts = 4;
  const categoryProducts = process.env.CATEGORYPRODUCTS_KID;
  const titleProducts1 = "Popular Products";
  const titleProducts2 = "Latest Products";

  return (
    <main>
      <Header />
      <FirstLook />
      <div className={`${max_width.max_width} pt-14`}>
        <Popular limitProducts={limitProducts} titleProducts={titleProducts1} />
      </div>
      <Banner />
      <div className={`${max_width.max_width}`}>
        <Popular
          categoryProducts={categoryProducts}
          titleProducts={titleProducts2}
        />
      </div>

      <Subscribe />
      <Footer />
    </main>
  );
};

export default page;
