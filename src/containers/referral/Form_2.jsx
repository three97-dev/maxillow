import React from "react";
import MyCheckbox from "./Checkbox";
const Form_2 = () => {
  return (
    <div className="px-[30px] lg:px-[81px] 2xl:px-[140px] py-6">
      <h1>Procedure Details</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">Primary Concern(s):</h6>
          <div className="mt-3 mb-3">
            <MyCheckbox
              label="Dental Extractions"
              name="Primary Concern[]"
              value="Dental Extractions"
            />

            <MyCheckbox
              label="Third Molars"
              name="Primary Concern[]"
              value="Third Molars"
            />

            <MyCheckbox
              label="Tooth Exposure"
              name="Primary Concern[]"
              value="Tooth Exposure"
            />

            <MyCheckbox
              label="Dental Implants"
              name="Primary Concern[]"
              value="Dental Implants"
            />
          </div>
        </div>
        <div className="my-4 md:w-[49%]">
          <h6 className="uppercase text-[#707070] mt-4">Procedure Type(S):</h6>

          <div className="mt-3 mb-3">
            <MyCheckbox
              label="Bone Augmentation"
              name="Procedure Type[]"
              value="Bone Augmentation"
            />

            <MyCheckbox
              label="Pathology/Biopsy"
              name="Procedure Type[]"
              value="Pathology/Biopsy"
            />

            <MyCheckbox
              label="Orthognathic Surgery"
              name="Procedure Type[]"
              value="Orthognathic Surgery"
            />

            <MyCheckbox
              label="Temporomandibular Joint Disorder"
              name="Procedure Type[]"
              value="Temporomandibular Joint Disorder"
            />

            <MyCheckbox
              label="Three Dimensional Imaging"
              name="Procedure Type[]"
              value="Three Dimensional Imaging"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4 md:w-[49%]">
          <input
            name="Brand"
            placeholder="Brand"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none  insetShadow"
          />
        </div>
        <div className="my-4 md:w-[49%]">
          <input
            name="Site"
            placeholder="Site"
            type="text"
            className="w-full p-3 rounded-lg outline-none border-none shadow-inner insetShadow"
          />
        </div>
      </div>

      {/* SITES */}
      <div>
        <h6 className="uppercase text-[#707070] mt-4">site(s):</h6>
        {/* Checks */}

        <div className="pt-4 overflow-hidden relative">
          <div className="flex border-b-2 border-[#D6D4D1]">
            <div className=" flex-col justify-start w-2/4 pb-5">
              <div className="flex flex-row flex-wrap justify-end">
                {[55, 54, 53, 52, 51].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-end">
                {[18, 17, 16, 15, 14, 13, 12, 11].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex-col justify-start w-2/4 pb-5">
              <div className="flex flex-row flex-wrap justify-start ">
                {[61, 62, 63, 64, 65].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-start ">
                {[21, 22, 23, 24, 25, 26, 27, 28].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
            </div>
            <span className="absolute left-[47%] md:left-[48.7%]  border-l-2 border-[#D6D4D1] h-[9999px]"></span>
          </div>
          <div className="flex">
            <div className=" flex-col justify-start w-2/4 pt-4">
              <div className="flex flex-row-reverse flex-wrap-reverse">
                {[41, 42, 43, 44, 45, 46, 47, 48].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>

              <div className="flex flex-row-reverse flex-wrap-reverse">
                {[81, 82, 83, 84, 85].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
            </div>

            <div className=" flex-col justify-start w-2/4 pt-4 ">
              <div className="flex flex-row-reverse flex-wrap-reverse justify-end">
                {[38, 37, 36, 35, 34, 33, 32, 31].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-start">
                {[71, 72, 73, 74, 75].map((n) => (
                  <div className="flex justify-start items-center w-20 pt-2">
                    <MyCheckbox label={n} name="sites[]" value={n} />
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
