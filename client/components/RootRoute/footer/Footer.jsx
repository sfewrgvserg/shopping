import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import Link from "next/link";

import max_width from "../../styles.module.css";
import "./footer.css";

const Footer = () => {
  return (
    <div className={` ${max_width.max_width}`}>
      <div className="flex justify-between py-28  border-b-2 border-stone-300">
        <ul className="space">
          <li>
            <h3 className="title">Learn More</h3>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">Exchange Policy</Link>
          </li>
          <li>
            <Link href="/">Other Now</Link>
          </li>
          <li>
            <Link href="/">F&Q</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>

        <ul className="space">
          <li>
            <h3 className="title">Our Community</h3>
          </li>
          <li>
            <Link href="/">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="/">Special Offers</Link>
          </li>
          <li>
            <Link href="/">Customer Reviews</Link>
          </li>
        </ul>

        <ul className="space">
          <li>
            <h3 className="title">Contact Us</h3>
          </li>
          <li>Contact Number: 123-456-7890</li>
          <li>Email Address: philippineshdk123@gmail.com</li>
        </ul>

        <ul className="flex flex-col space-y-3">
          <li>
            <h3 className="title">Social</h3>
          </li>

          <div className="flex items-center space-x-2">
            <li>
              <Link href="/">
                <FaFacebook size={20} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiFillInstagram size={20} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaXTwitter size={20} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaYoutube size={20} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaLinkedin size={20} />
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div className="w-full py-10 flex justify-center">
        <h2>2024 logo | All Right Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
