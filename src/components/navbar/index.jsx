import React, { useState } from "react"
import { Link } from "gatsby"
import "./index.scss"
import Logo from "./../../images/logo.png"
import ToggleButton from "./../../images/toggle.png"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)

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
    <div className="header bg-white shadow-lg w-full">
      <header className="container mx-auto header-main py-3 left-0 right-0 top-0 z-10">
        <div className="flex flex-wrap items-center justify-between px-4 lg:px-6 w-full">
          <Link className="flex items-center no-underline text-white" to="/">
            <img src={Logo} alt="logo" className="w-48 lg:w-54 lg:w-64" />
          </Link>
          <button
            className="lg:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <img src={ToggleButton} alt="" className="w-4 sm:w-8" />
          </button>
          <nav
            className={`${
              isExpanded ? "block nav shadow-lg" : "hidden"
            } lg:flex lg:items-center w-full lg:w-auto`}
          >
            {navigations.map(item => (
              <Link
                className="block lg:inline-block mb-2 lg:mt-0 lg:ml-4 no-underline lg:hover:bg-lightlightGreenBlue lg:hover:text-secondary p-4 lg:p-3 rounded-full"
                activeClassName="bg-lightlightGreenBlue lg:bg-white  text-secondary"
                key={item.title}
                to={item.path}
                partiallyActive={true}
              >
                <div className="item flex items-center">
                  <span className="text-sm">{item.title}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
