import React from "react"
import RRenderer from "../../../components/richtextRenderer"

const OtherOptions = ({ data }) => {
  const { footerTitle, footerContent } = data

  return (
    <div className="bg-lightGreenBlue py-12 lg:py-24 global-x-spacing">
      <div className="w-full md:w-1/2 lg:w-full mx-auto max-w-5xl ">
        <h1 className="mb-5 text-center">{footerTitle}</h1>
        <div>
          <RRenderer
            data={footerContent}
            config={{
              p: "mt-4",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OtherOptions