

import { Link } from "react-router-dom";

const NavbarItems = ({ icon, click, to }) => {
  return (
    <Link to={to} className="flex flex-col items-center cursor-pointer ">
      <img  src={icon} alt={click} className="w-16 h-16 mb-1 border-4 p-1 border-r-sky-500 border-b-sky-500 border-t-white border-l-white hover:rotate-12 rounded-full" />
      <span className="text-white font-semibold">{click}</span>
    </Link>
  );
};


export default NavbarItems