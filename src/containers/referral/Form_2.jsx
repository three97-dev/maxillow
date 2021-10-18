import React from "react";
const Form_2 = () => {
  return (
    <div className=" p-8 md:px-30 xl:px-60 ">
      <h1>Procedure Details</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">Primary Concern(s):</h6>
          <div className="mt-3 mb-3">
            <label className="mt-4 ">
              <input
                type="checkbox"
                name="Primary Concern[]"
                value="Dental Extractions"
                className=" w-4 h-4"
              />
              <span className="ml-3">Dental Extractions</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Primary Concern[]"
                value="Third Molars"
                className=" w-4 h-4"
              />
              <span className="ml-3">Third Molars</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Primary Concern[]"
                value="Tooth Exposure"
                className=" w-4 h-4"
              />
              <span className="ml-3">Tooth Exposure</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Primary Concern[]"
                value="Dental Implants"
                className=" w-4 h-4"
              />
              <span className="ml-3">Dental Implants</span>
            </label>
          </div>
        </div>
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">Procedure Type(S):</h6>

          <div className="mt-3 mb-3">
            <label className="mt-4">
              <input
                type="checkbox"
                name="Procedure Type[]"
                value="Bone Augmentation"
                className=" w-4 h-4"
              />
              <span className="ml-3">Bone Augmentation</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Procedure Type[]"
                value="Pathology/Biopsy"
                className=" w-4 h-4"
              />
              <span className="ml-3">Pathology/Biopsy</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Procedure Type[]"
                value="Orthognathic Surgery"
                className=" w-4 h-4"
              />
              <span className="ml-3">Orthognathic Surgery</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Procedure Type[]"
                value="Temporomandibular Joint Disorder"
                className=" 
                w-4 h-4"
              />
              <span className="ml-3">Temporomandibular Joint Disorder</span>
            </label>
            <br />
            <label className="mt-4">
              <input
                type="checkbox"
                name="Procedure Type[]"
                value="Three Dimensional Imaging"
                className=" w-4 h-4"
              />
              <span className="ml-3">Three Dimensional Imaging</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <input
            name="Brand"
            placeholder="Brand"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <input
            name="Site"
            placeholder="Site"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner"
          />
        </div>
      </div>

      {/* SITES */}
      <div>
        <h6 className="uppercase text-[#707070] mt-4">site(s):</h6>
        {/* Checks */}

        <div className="pt-4">
          <div className="flex border-b-2 border-[#D6D4D1]">
            <div className=" flex-col justify-start w-2/4 border-r-2 border-[#D6D4D1] pb-5">
              <div className="flex flex-row flex-wrap justify-end">
                {[55, 54, 53, 52, 51].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-end">
                {[18, 17, 16, 15, 14, 13, 12, 11].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex-col justify-start w-2/4 pl-6 pb-5">
              <div className="flex flex-row flex-wrap justify-start ">
                {[61, 62, 63, 64, 65].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-start ">
                {[21, 22, 23, 24, 25, 26, 27, 28].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex">
            <div className=" flex-col justify-start w-2/4 border-r-2 border-[#D6D4D1] pt-4">
              <div className="flex flex-row-reverse flex-wrap-reverse">
                {[41, 42, 43, 44, 45, 46, 47, 48].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-row-reverse flex-wrap-reverse">
                {[81, 82, 83, 84, 85].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex-col justify-start w-2/4 pl-6 pt-4 ">
              <div className="flex flex-row-reverse flex-wrap-reverse justify-end">
                {[38, 37, 36, 35, 34, 33, 32, 31].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-start">
                {[71, 72, 73, 74, 75].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <label className=" ">
                      <input
                        type="checkbox"
                        value={`${n}`}
                        name="sites[]"
                        className="w-4 h-4 mr-4"
                      />
                      {n}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" border-t-2 border-secondary  mt-12" />
    </div>
  );
};

export default Form_2;
