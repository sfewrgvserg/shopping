import Image from "next/image";

const Subscribe = async () => {
  return (
    <div>
      <div className="space-y-5 flex flex-col items-center h-[20rem] bg-slate-400 justify-center">
        <h2 className="text-3xl font-bold">
          Get Exclusive Offer On Your Email
        </h2>

        <div className="space-y-3 flex flex-col items-center">
          <p className="text-sm font-medium">
            SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATE
          </p>

          <div className="flex">
            <input
              type="email"
              className="w-[26rem] rounded-l-full py-2 px-5 border-2 border-stone-500 outline-none"
              placeholder="Your Email Address"
            />
            <button
              type="button"
              className="bg-stone-800 text-white text-lg font-light hover:bg-stone-900 duration-200 py-2 px-5 rounded-r-full"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
