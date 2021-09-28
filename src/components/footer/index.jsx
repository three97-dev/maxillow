import React from "react";
import { Link } from "gatsby";

// Assets and styles
import FooterLogo from "./../../images/FooterLogo.png";

function Footer() {
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
    <div className="flex flex-col items-center py-[100px] px-[30px] bg-gray-800 md:px-0 relative z-[1000]">
      <img src={FooterLogo} alt="" className="w-full md:w-54 md:w-64 mx-auto" />
      <nav className="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto md:gap-16 mt-[50px] mx-auto">
        {navigations.map((item) => (
          <Link
            className="footer-nav-link block md:inline-block no-underline text-primary"
            key={item.title}
            to={item.path}
            activeClassName="active"
            partiallyActive={true}
          >
            <div className="item flex items-center">
              <span className="text-sm text-white">{item.title}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Footer;
