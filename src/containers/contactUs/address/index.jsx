import React from "react"

// Components
import Map from "./map"

// Assets and Styles
import "./index.scss"
import Pattern from "../../../images/pattern.svg"

function Address(props) {
  return (
    <div className="global-x-spacing relative overflow-hidden">
      <img src={Pattern} className="contact-pattern-corner" alt="" />
      <div className=" py-4 lg:py-24">
        <div className="flex lg:flex-row flex-col justify-start items-center">
          <div className="text-3xl lg:w-1/3 lg:pr-32 xl:pr-44">
            <div>
              <h3 className="py-4 text-center lg:text-left">Locations</h3>
            </div>

            <div className="hidden lg:block">
              {props.data.edges.map((v, i) => (
                <div key={i}>
                  {i > 0 ? <hr className="content-seprator my-4" /> : ""}
                  <h4 className="font-light">{v.node.office}</h4>
                  <p className="text-base py-4">{v.node.address}<br />{v.node.address2}<br />{v.node.address3}</p>
                  {v?.node?.contact?.map((value, index) => (
                    <p className="text-base">{value}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-2/3 relative">
            <img src={Pattern} className="contact-pattern-map" alt="" />
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0 lg:mr-2 ">
                <Map link={props.mapOneLink} />
              </div>
              <div className="w-full lg:w-1/2 mt-2 lg:mt-0 lg:ml-2">
                <Map link={props.mapTwoLink} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:hidden my-12 global-x-spacing">
          {props.data.edges.map((v, i) => (
            <div
              key={i}
              className={`w-full md:w-1/2 ${
                i === 0
                  ? "md:border-r border-secondary md:pr-24"
                  : "pt-8 md:pt-0 md:pl-24"
              }`}
            >
              <h3 className="font-light">{v.node.office}</h3>
              <p className="text-base py-4">{v.node.address}<br />{v.node.address2}<br />{v.node.address3}</p>
              {v?.node?.contact?.map((value, index) => (
                <p className="text-base">{value}</p>
              ))}
              {i === 0 && <hr className="content-seprator mt-8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Address
