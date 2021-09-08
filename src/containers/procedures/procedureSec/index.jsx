import React from "react"
import { Link } from "gatsby"

//Assts and Styles
import Arrow from "./../../../images/ArrowButtonWhite.png"
import "./index.scss"

function ProcedureSec(props) {
  return (
    <div className="lg:pt-48 lg:pb-16 global-x-spacing procedure-intro-container">
      <div className="procedures-container flex flex-col rounded-xl pt-12 lg:py-12 md:px-12 lg:px-24">
        <div className="z-20">
          <h3 className="text-center mb-6">Procedures</h3>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            {props.data.edges.map((v, i) => {
              return (
                <Link to={`/${v.node.slug}`}>
                  <div
                    className="w-full bg-secondary bg-opacity-90 my-1 p-3 px-4 rounded-xl flex flex-row items-center"
                    key={i}
                  >
                    <h2 className="flex-1 text-white uppercase">
                      {v.node.title}
                    </h2>
                    <img src={Arrow} alt="" className="w-10" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcedureSec
