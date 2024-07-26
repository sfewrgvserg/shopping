"use client";

import Image from "next/image";
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { TbMoodKidFilled } from "react-icons/tb";

import max_width from "../../styles.module.css";

import { usePathname } from "next/navigation";

import "./Header.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <section className="py-3 sticky top-0 bg-white z-50">
      <div className={max_width.max_width}>
        <div className="flex items-center space-x-3 justify-between">
          <div>
            <Image src="/logoipsum-332.svg" width={60} height={50} />
          </div>
          <div>
            <ul className="flex space-x-5 max-md:hidden">
              <li className="li_custom">
                <Link
                  href="/"
                  className={`link_custom ${pathname === "/" ? "link " : ""}`}
                >
                  <FaHome size={23} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="li_custom">
                <Link
                  href="/product/man"
                  className={`link_custom ${
                    pathname === "/product/man" ? "link " : ""
                  }`}
                >
                  <IoIosMan size={23} />
                  <span>Men's</span>
                </Link>
              </li>
              <li className="li_custom">
                <Link
                  href="/product/woman"
                  className={`link_custom ${
                    pathname === "/product/woman" ? "link " : ""
                  }`}
                >
                  <IoIosWoman size={23} />
                  <span>Woman's</span>
                </Link>
              </li>
              <li className="li_custom">
                <Link
                  href="/product/kid"
                  className={`link_custom ${
                    pathname === "/product/kid" ? "link " : ""
                  }`}
                >
                  <TbMoodKidFilled size={23} />
                  <span>Kid's</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            <div className="relative border-2 border-gray-300 rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
              <Link href="/subTotal">
                <Image
                  src="/ASSETS/admin/assets/addproduct.png"
                  className="absolute p-1"
                  fill
                />
                <div className="absolute -top-2 -right-3 bg-amber-500 rounded-full w-6 h-6 flex items-center justify-center text-white">
                  {15}
                </div>
              </Link>
            </div>

            <div className="text-white bg-amber-500 rounded-lg py-2 px-3 font-medium">
              <button className="link_custom">
                <CiLogin size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
