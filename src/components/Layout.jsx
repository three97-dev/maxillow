import React from "react"
import { Helmet } from "react-helmet"
// import Seo from "./seo"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="bg-cover bg-center bg-no-repeat">
      {/* <Seo /> */}
      <Helmet>
        <title>Maxillo Winnipeg</title>
        <link rel="stylesheet" href="https://use.typekit.net/svu8gnu.css" />
      </Helmet>
      <div className="flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
