import Link from "next/link";

import Header from "../RootRoute/Header/Header";

import { IoMdArrowDropright } from "react-icons/io";

const RouteLinks = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        {route.map((item, index) => (
          <div key={index}>
            <Link href={item.path} className="flex items-center pb-3 pt-5">
              {index > 0 ? <IoMdArrowDropright size={20} /> : ""} {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteLinks;
