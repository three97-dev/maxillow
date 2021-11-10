import React from "react"
import RRenderer from "../../../components/richtextRenderer"

const OtherOptions = ({ data }) => {
  const { footerTitle, footerContent } = data

  return (
    <div className="bg-lightGreenBlue py-12 lg:py-24 px-[30px] sm:px-[81px] xl:px-[140px]">
      <div className="w-full lg:w-full mx-auto">
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
