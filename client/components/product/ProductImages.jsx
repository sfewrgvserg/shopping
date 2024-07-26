import Image from "next/image";

const ProductImages = ({ images, mainImage }) => {
  return (
    <div className="">
      <div className="flex w-full max-sm:flex-col">
        <div className="grid grid-cols-1 grid-rows-3 pr-2 max-sm:hidden">
          {images.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                width={165}
                height={165}
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <Image
          src={mainImage}
          width={700}
          height={700}
          alt="Main product image"
          className=""
        />

        <div className="max-sm:grid max-sm:grid-cols-4 max-sm:py-2 sm:hidden max-sm:items-center max-sm:w-full max-sm:grid-rows-1 max-sm:gap-3">
          {images.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                width={165}
                height={165}
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
