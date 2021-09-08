import React from "react"
import PhoneImage from "./../../../images/PhoneImage.png"

import "./index.scss"

function ContactForm(props) {
  return (
    <div className="bg-secondary global-x-spacing">
      <div className="py-14 md:pt-8 md:pb-8 lg:pt-24 lg:pb-20">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex-1">
            <div className="text-center lg:text-right mx-6 md:mx-12 lg:mx-0 lg:pr-6 xl:pr-16 pb-6 lg:pb-40 border-white lg:border-r">
              <h1 className="text-white mb-4">Contact Us</h1>
              <p className="text-white w-10/12 lg:w-full  mx-auto">
                If you have any questions about our facility or procedures,
                please get in touch. We look forward to keeping you smiling!
              </p>
            </div>
            <div className="hidden justify-end contact-hero-image lg:block">
              <img src={PhoneImage} alt="" />
            </div>
          </div>
          <div className="lg:pl-6 xl:pl-16 flex-2 text-center">
            <div className="lg:flex">
              <div className="flex-1 m-2">
                <input
                  placeholder="First Name"
                  type="text"
                  className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  placeholder="Last Name"
                  type="text"
                  className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
                />
              </div>
            </div>

            <div className="lg:flex">
              <div className="flex-1 m-2">
                <input
                  placeholder="Email Address"
                  type="text"
                  className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
                />
              </div>
              <div className="flex-1 m-2">
                <input
                  placeholder="Phone Number"
                  type="text"
                  className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
                />
              </div>
            </div>

            <div className="flex">
              <div className="flex-1 m-2">
                <textarea
                  placeholder="Message"
                  className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
                  rows={6}
                ></textarea>
              </div>
            </div>

            <div className="flex mt-3 lg:mt-16">
              <div className="flex-1 m-2">
                <button className="uppercase bg-transparent text-white border-2 border-white rounded-3xl py-2 px-10 hover:bg-white hover:text-secondary">
                  Submit
                </button>
              </div>
            </div>
            <div className="hidden sm:block lg:hidden">
              <div className="flex justify-end mt-8">
                <img src={PhoneImage} className="w-9/12" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
