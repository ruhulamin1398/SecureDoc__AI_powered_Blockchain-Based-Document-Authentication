import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops, menuLink }) => (
  <li className={`my-2 cursor-pointer ${classprops}`}>
    <a href={menuLink}>{title}</a>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const menuItems = {
    Home: "#",
    Dashboard: "#dashboard",
    Users: "#users",
    Products: "#products",
    Settings: "#settings",
  };
  const menuArray = Object.entries(menuItems);

  return (
    <nav className="h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <div className="p-4">
          <a href="#">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer"
              width="200px"
            />
          </a>
        </div>
        <ul className="text-white list-none">
          {menuArray.map(([key, value], index) => (
            <NavBarItem key={key + index} title={key} menuLink={value} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center pb-4">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
      </div>
      {toggleMenu && (
        <ul className="text-white list-none">
          {menuArray.map(([key, value], index) => (
            <NavBarItem key={key + index} title={key} menuLink={value} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
