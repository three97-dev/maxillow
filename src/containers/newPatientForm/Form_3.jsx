import React, { useState } from "react";
import Input from "../../components/form/Input";

import AddIcon from "../../images/forms/Add.svg"

const Form_3 = () => {
  const [additionalInsurance1, setAdditionalInsurance1] = useState(false);
  const [additionalInsurance2, setAdditionalInsurance2] = useState(false);

  const handleAdditionalInsuranceChange = () => {
    if (additionalInsurance1) {
      setAdditionalInsurance2(true);
    } else {
      setAdditionalInsurance1(true);
    }
  };

  return (
    <div className="px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] py-6">
      <h2>Primary Insurance Information</h2>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
        <Input label="Insurance Company:" name="Insurance Company" className="mt-3" />
        <Input label="Group/Plan #:" name="Group/Plan #" />
        <Input label="Contract/Cert #:" name="Contract/Cert #" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Name of Subscriber:" name="Name of Subscriber" />
        <Input label="Relationship to Subscriber:" name="Relationship to Subscriber" />
        <Input label="Subscriber DOB (M/D/Y):" name="Subscriber DOB (M/D/Y)" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Employer:" name="Employer" />
      </div>

      {additionalInsurance1 && (
        <>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-start mt-16">
            <h2>Additional Insurance Information</h2>
            {!additionalInsurance2 && (
              <button type="button" onClick={() => setAdditionalInsurance1(false)}>
                <h3 className="text-[#ff0000] underline">Remove</h3>
              </button>
            )}
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
            <Input label="Insurance Company:" name="Insurance Company (Additional 1)" />
            <Input label="Group/Plan #:" name="Group/Plan # (Additional 1)" />
            <Input label="Contract/Cert #:" name="Contract/Cert # (Additional 1)" />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input label="Name of Subscriber:" name="Name of Subscriber (Additional 1)" />
            <Input label="Relationship to Subscriber:" name="Relationship to Subscriber (Additional 1)" />
            <Input label="Subscriber DOB (M/D/Y):" name="Subscriber DOB (M/D/Y) (Additional 1)" />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input label="Employer:" name="Employer (Additional 1)" />
          </div>
        </>
      )}

      {additionalInsurance2 && (
        <>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-start mt-16">
            <h2>Additional Insurance Information</h2>
            <button type="button" onClick={() => setAdditionalInsurance2(false)}>
              <h3 className="text-[#ff0000] underline">Remove</h3>
            </button>
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
            <Input label="Insurance Company:" name="Insurance Company (Additional 2)" />
            <Input label="Group/Plan #:" name="Group/Plan # (Additional 2)" />
            <Input label="Contract/Cert #:" name="Contract/Cert # (Additional 2)" />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input label="Name of Subscriber:" name="Name of Subscriber (Additional 2)" />
            <Input label="Relationship to Subscriber:" name="Relationship to Subscriber (Additional 2)" />
            <Input label="Subscriber DOB (M/D/Y):" name="Subscriber DOB (M/D/Y) (Additional 2)" />
          </div>
          <div className="hidden print-visible mt-[220px]"></div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input label="Employer:" name="Employer (Additional 2)" />
          </div>
        </>
      )}

      {!(additionalInsurance1 && additionalInsurance2) && (
        <button
          type="button"
          onClick={() => handleAdditionalInsuranceChange()}
          className="flex items-center justify-center w-full md:w-[478px] mt-[54px] px-8 py-[38px] md:py-[34px] bg-[#EFE5E5] rounded-[10px] shadow-inner insetShadow"
        >
          <img src={AddIcon} alt="Add icon" className="w-10 h-10 mr-8"></img>
          <h2>Add Insurance Provider</h2>
        </button>
      )}

      <h3 className="mt-16 leading-6 md:leading-[30px]">
        I authorize release, to my dental benefits plan administrator and the CDA, information contained in claims
        submitted electronically. I also authorize the communication of information related to the coverage of services
        described to the named dentist. This authorization shall continue in effect until the undersigned revokes the
        same.
      </h3>
      <div className="mt-[5px] md:mt-[54px] grid gap-x-4 grid-cols-1 md:grid-cols-[66.4%,auto]">
        <Input label="Signature of patient, parent or guardian:" name="Signature of patient, parent or guardian" />
        <Input label="Date:" name="Date" />
      </div>
      <div className="mt-6 mb-7 md:my-[54px] grid justify-center">
        <button
          type="submit"
          className="px-[52px] md:px-[104px] py-[9px] border-2 rounded-full uppercase mx-auto align-middle border-primary text-primary hover:bg-primary hover:text-white hover:cursor-pointer transition-all duration-150"
        >
          <h4>Submit</h4>
        </button>
      </div>
      <h2 className="text-center leading-[30px] md:leading-[36px] md:mt-16 mb-12 md:mb-8 md:max-w-[812px] mx-auto print-hidden">
        Upon submission, this form will be sent directly to our administration staff. Thank you for completing.
      </h2>
    </div>
  );
};

export default Form_3;
