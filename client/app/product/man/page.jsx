import Header from "@/components/RootRoute/Header/Header";
import Banner from "@/components/womanRoute/banner/Banner";
import Popular from "@/components/RootRoute/populationSection/Popular";

import max_width from "@/components/styles.module.css";

import "dotenv/config";

const page = () => {
  return (
    <div>
      <Header />
      <div className={`${max_width.max_width}`}>
        <div className="py-10">
          <Banner img="/ASSETS/frontend/assets/bannermens.png" />
        </div>

        <div>
          <Popular
            showCount={true}
            categoryProducts={process.env.CATEGORYPRODUCTS_MEN}
            titleProducts="empty"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
