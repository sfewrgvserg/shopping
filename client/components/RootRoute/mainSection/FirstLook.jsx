import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineLocalOffer } from "react-icons/md";

import max_width from "../../styles.module.css";

const FirstLook = () => {
  return (
    <div className="text-stone-700 h-[100vh] relative bg-[url('/ASSETS/frontend/assets/bgecom.png')] bg-center">
      <div className={max_width.max_width}>
        <div className="flex flex-col justify-center absolute h-full space-y-10">
          <h2 className="text-6xl font-bold">
            Digital Shopping <br />
            Hub Junction
          </h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            harum <br />
            dignissimos aperiam, nihil eum voluptatem dolores! Consequuntur,
            <br />
            tempora esse. Reprehenderit eligendi fugiat reiciendis doloribus
            <br />
            veritatis sed cumque? Eos, molestiae aut!
            <br />
          </p>

          <div className="flex items-center space-x-3">
            <div className="flex space-x-1 text-black">
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStar size={20} />
              <FaStarHalfStroke size={20} />
            </div>

            <div>
              <p className="text-xl">
                <span className="font-semibold text-black">198k</span> Excellent
                Reviews
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-stone-800 hover:bg-black duration-200 text-white font-medium px-5 py-2 rounded-full">
              <span>Shop Now</span>
            </button>
            <button className="bg-white text-black font-medium px-5 py-2 space-x-2 rounded-full flex items-center">
              <MdOutlineLocalOffer />
              <span>Offers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLook;
