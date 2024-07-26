import Image from "next/image";

import max_width from "../../styles.module.css";

const Banner = () => {
  return (
    <div className="py-[7rem]">
      <div className="absolute">
        <Image
          src="/ASSETS/frontend/assets/banneroffer.png"
          width={5000}
          height={5000}
          className="w-screen h-full"
        />
      </div>

      <div
        className={`relative h-[31rem] flex flex-col items-start justify-center ${max_width.max_width} space-y-7`}
      >
        <p className="text-5xl font-bold">Summer Sale 50%</p>
        <p className="text-2xl font-semibold">
          Mes's Leather Formal Wear Shoes
        </p>
        <button className="text-sm font-medium hover:bg-stone-800 duration-200 py-3 px-5 bg-black text-white rounded-full">
          Go To Store
        </button>
      </div>
    </div>
  );
};

export default Banner;
