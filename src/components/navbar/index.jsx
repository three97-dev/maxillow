import React, { useState } from "react";
import { Link } from "gatsby";
import "./index.scss";
import Logo from "./../../images/logo.png";
import ToggleButton from "./../../images/toggle.png";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  const navigations = [
    {
      title: "ABOUT US",
      path: "/about-us",
    },
    {
      title: "PROCEDURES",
      path: "/procedures",
    },
    {
      title: "FACILITIES",
      path: "/facilities",
    },
    {
      title: "CONTACT US",
      path: "/contact-us",
    },
  ];

  return (
    <div className="header bg-white shadow-lg w-full">
      <header className="header-main py-[15px] left-0 right-0 top-0 z-10 mx-[30px] sm:mx-[82px] xl:mx-[145px]">
        <div className="flex flex-wrap items-center justify-between w-full">
          <Link className="flex items-center no-underline text-white" to="/">
            <img
              src={Logo}
              alt="logo"
              className="w-[160px] h-[20px] sm:w-[242px] sm:h-[30px] xl:w-[165px] xl:h-[20px] 2xl:w-[259px] 2xl:h-[32px] lg:w-54 lg:w-64"
            />
          </Link>
          <button
            className="lg:hidden border border-white flex items-center py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <img src={ToggleButton} alt="" className="w-[37]" />
          </button>
          <nav
            className={`${
              isExpanded ? "block nav shadow-lg" : "hidden"
            } lg:flex lg:items-center w-full lg:w-auto`}
          >
            {navigations.map(item => (
              <Link
                className="block lg:inline-block text-secondary rounded-full lg:ml-[25px] xl:ml-[50px] 2xl:ml-[75px] p-4 lg:p-0 lg:hover:bg-lightlightGreenBlue"
                activeClassName="bg-lightlightGreenBlue lg:bg-white"
                key={item.title}
                to={item.path}
                partiallyActive={true}
              >
                <div className="item flex items-center">
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>
            ))}
            <Link
              className="block lg:inline-block text-secondary drop-shadow-lg header-shadow rounded-xl cursor-pointer transition duration-300 lg:ml-[25px] xl:ml-[50px] 2xl:ml-[75px] p-[12px] py-4 lg:hover:bg-lighttBlue lg:bg-secondary lg:text-white"
              partiallyActive={true}
              to="/referral"
            >
              <div className="item flex items-center">
                <span className="text-sm">MAKE A REFFERRAL</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
