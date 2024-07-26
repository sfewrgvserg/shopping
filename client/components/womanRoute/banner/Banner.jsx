import Image from "next/image";

const Banner = ({ img }) => {
  return (
    <div>
      <Image className="w-full" src={img} width={1000} height={700} />
    </div>
  );
};

export default Banner;
