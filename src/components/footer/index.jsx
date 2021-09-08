import React from "react"
import { Link } from "gatsby"

// Assets and styles
import FooterLogo from "./../../images/FooterLogo.png"
import "./index.scss"

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
  ]
  return (
    <div className="bg-gray-800 py-16 flex flex-col items-center px-12 md:px-0">
      <img
        src={FooterLogo}
        alt=""
        className="w-full md:w-54 md:w-64 mx-auto mb-6 md:mb-0"
      />
      <nav className="block flex flex-col md:flex-row items-center w-full md:w-auto pt-6 mx-auto p-4">
        {navigations.map(item => (
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
  )
}

export default Footer
