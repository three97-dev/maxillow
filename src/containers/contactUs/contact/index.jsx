import React from "react";
import PhoneImage from "./../../../images/PhoneImage.png";

import "./index.scss";

function ContactForm(props) {
  return (
    <form name="contact-us" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/">
      <input type="hidden" name="form-name" value="contact-us" />
      <div className="bg-secondary contuct-us-shadow px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px]">
        <div className="pt-[50px] md:pt-[75px] lg:pt-[115px] 2xl:pt-[260px] pb-[64px] md:pb-[0px] lg:pb-[25px] 2xl:pb-[175px]">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex-1">
              <div className="text-center lg:text-right mx-6 md:mx-12 lg:mx-0 lg:mt-[15px] lg:mr-[44px] 2xl:mr-[67px] lg:mb-[60px] lg:pr-[56px] 2xl:pr-[77px] pb-[15px] md:pb-[30px] lg:pb-[50px] border-white lg:border-r">
                <h1 className="text-white mb-4">Contact Us</h1>
                <p className="text-white w-[90%] lg:w-full mx-auto">
                  If you have any questions about our facility or procedures, please get in touch. We look forward to
                  keeping you smiling!
                </p>
              </div>
              <div className="hidden lg:block justify-end contact-hero-image">
                <img src={PhoneImage} alt="" />
              </div>
            </div>
            <div className="lg:pl-[10px] flex-2 text-center">
              <div className="lg:flex">
                <div className="flex-1 mt-[15px] md:ml-[85px] md:mr-[85px] lg:mx-[0px]">
                  <input
                    name="First Name"
                    placeholder="First name"
                    type="text"
                    className="w-full px-[20px] py-[14px] text-[16px] leading-[22px] rounded-lg outline-none border-none shadow-inner insetShadow"
                  />
                </div>
                <div className="flex-1 mt-[15px] md:ml-[85px] md:mr-[85px] lg:mx-[0px] lg:ml-[20px]">
                  <input
                    name="Last name"
                    placeholder="Last name"
                    type="text"
                    className="w-full px-[20px] py-[14px] text-[16px] leading-[22px] rounded-lg outline-none border-none shadow-inner insetShadow"
                  />
                </div>
              </div>

              <div className="lg:flex">
                <div className="flex-1 mt-[15px] md:ml-[85px] md:mr-[85px] lg:mx-[0px]">
                  <input
                    name="Email Address"
                    placeholder="Email Address"
                    type="text"
                    className="w-full px-[20px] py-[14px] text-[16px] leading-[22px] rounded-lg outline-none border-none shadow-inner insetShadow"
                  />
                </div>
                <div className="flex-1 mt-[15px] md:ml-[85px] md:mr-[85px] lg:mx-[0px] lg:ml-[20px]">
                  <input
                    name="Phone number"
                    placeholder="Phone number"
                    type="text"
                    className="w-full px-[20px] py-[14px] text-[16px] leading-[22px] rounded-lg outline-none border-none shadow-inner insetShadow"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="flex-1 mt-[15px] md:ml-[85px] md:mr-[85px] lg:mx-[0px]">
                  <textarea
                    name="Message"
                    placeholder="Message"
                    className="w-full px-[20px] py-[14px] text-[16px] leading-[22px] rounded-lg outline-none border-none shadow-inner insetShadow"
                    rows={7}
                  ></textarea>
                </div>
              </div>

              <div className="flex mt-[10px] lg:mt-[30px] 2xl:mt-[83px]">
                <div className="flex-1 mt-[15px] md:mt-[35px]">
                  <button className="uppercase bg-transparent text-white text-[14px] leading-[18px] border-2 border-white rounded-3xl py-[9px] px-[53px] lg:px-[57px] 2xl:px-[102px] hover:bg-white hover:text-secondary">
                    Submit
                  </button>
                </div>
              </div>
              <div className="hidden sm:block lg:hidden">
                <div className="flex justify-end mt-[66px] mr-[1px]">
                  <img src={PhoneImage} className="w-[73%]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
