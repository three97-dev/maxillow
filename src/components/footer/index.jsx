import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import RRenderer from "../richtextRenderer";

import "./index.scss";

function Footer() {
  const { data } = useStaticQuery(graphql`
    query Footer($locale: String) {
      data: allContentfulFooter(filter: { node_locale: { eq: $locale } }) {
        nodes {
          footerLogo {
            file {
              url
            }
          }
          links {
            linkText
            link
          }
          footerContent
          buttonLabel
          buttonLink
          addessTitle1
          addressContent1 {
            raw
          }
          addressTitle2
          addressContent2 {
            raw
          }
        }
      }
    }
  `);
  const {
    footerLogo,
    links,
    footerContent,
    buttonLabel,
    buttonLink,
    addessTitle1,
    addressTitle2,
    addressContent1,
    addressContent2,
  } = data.nodes[0];
  return (
    <div className="grid gridFooter justify-items-center py-[50px] xl:py-[80px] 2xl:py-[92px] px-[24px] md:px-[70px] xl:px-[135px] 2xl:px-[140px] bg-[#2D2D2D] relative">
      <div className="gridLogoTextArea w-full md:w-[500px] xl:w-[256px] 2xl:w-[398px] max-w-[330px] md:max-w-none mx-auto">
        <img
          src={footerLogo.file.url}
          alt="Logo Image"
          className="w-full md:w-[240px] xl:w-[256px] 2xl:w-[398px] mx-auto mb-[20px] md:mb-[24px] xl:mb-[20px]"
        />
        <p className="text-[16px] leading-[22px] text-white text-center">
          {footerContent}
        </p>
      </div>
      <div className="gridLinksArea md:mr-auto md:mt-[-5px]">
        <nav className="grid justify-items-center md:justify-items-start">
          {links.map(item => (
            <Link
              className="text-primary"
              key={item.linkText}
              to={item.link}
              activeClassName="active"
              partiallyActive={true}
            >
              <div className="mb-[17px] md:mb-[13px]">
                <span className="text-[18px] 2xl:text-[20px] leading-[18px] 2xl:leading-[20px] font-semibold uppercase text-white">
                  {item.linkText}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      <Link
        className="gridButtonArea footer-shadow text-[14px] leading-[16px] py-[15px] px-[18px] xl:px-[22px] 2xl:px-[70px] text-white border border-[#F5F5F5] cursor-pointer transition duration-300 lg:hover:bg-[#454545] rounded-lg md:ml-[9px] xl:ml-[0px] 2xl:mr-[-72px] mt-[-5px] md:mt-[0px] xl:mr-auto"
        partiallyActive={true}
        to={buttonLink}
        target="_blank"
      >
        <div className="item flex items-center">
          <span>{buttonLabel}</span>
        </div>
      </Link>

      <div className="gridAddressFirstArea w-full md:w-[165px] md:ml-[5px] xl:ml-[0px] 2xl:ml-[10px] md:mt-[2px]">
        <p className="text-[18px] xl:text-[20px] leading-[18px] text-white text-center md:text-left mb-[18px]">
          {addessTitle1}
        </p>
        <RRenderer
          data={addressContent1}
          config={{
            p: "text-[14px] leading-[18px] text-white text-center md:text-left",
          }}
        />
      </div>
      <div className="gridAddressSecondArea w-full md:w-[165px] md:ml-[12px] xl:ml-[0px] 2xl:ml-[30px] md:mt-[2px]">
        <p className="text-[18px] xl:text-[20px] leading-[18px] text-white text-center md:text-left mb-[18px]">
          {addressTitle2}
        </p>
        <RRenderer
          data={addressContent2}
          config={{
            p: "text-[14px] leading-[18px] text-white text-center md:text-left",
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
