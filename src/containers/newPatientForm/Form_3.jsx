import React from "react";
import Checkbox from "../../components/form/Checkbox";
import Input from "../../components/form/Input";

import AddIcon from "../../images/forms/Add.svg";

const Form_3 = ({
  formik,
  additionalInsurance1,
  additionalInsurance2,
  onAdditionalInsuranceClick,
  onAdditionalInsuranceRemove,
}) => {
  return (
    <div className="px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] py-6">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h2 className="mb-5 lg:mb-0 lg:mr-5">Primary Insurance Information</h2>
        <Checkbox
          label="I do not have dental insurance"
          name="noDentalInsurance"
          checked={formik.values.noDentalInsurance}
          onChange={() => formik.setFieldValue("noDentalInsurance", !formik.values.noDentalInsurance)}
        />
      </div>
      {!formik.values.noDentalInsurance && (
        <>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
            <Input
              label="Insurance Company:"
              name="insuranceCompany"
              value={formik.values.insuranceCompany}
              onChange={formik.handleChange}
              isError={formik.errors.insuranceCompany}
              className="mt-3"
            />
            <Input
              label="Group/Plan #:"
              name="groupPlan"
              value={formik.values.groupPlan}
              onChange={formik.handleChange}
              isError={formik.errors.groupPlan}
            />
            <Input
              label="Contract/Cert #:"
              name="contractCert"
              value={formik.values.contractCert}
              onChange={formik.handleChange}
              isError={formik.errors.contractCert}
            />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Name of Subscriber:"
              name="nameOfSubscriber"
              value={formik.values.nameOfSubscriber}
              onChange={formik.handleChange}
              isError={formik.errors.nameOfSubscriber}
            />
            <Input
              label="Relationship to Subscriber:"
              name="relationshipToSubscriber"
              value={formik.values.relationshipToSubscriber}
              onChange={formik.handleChange}
              isError={formik.errors.relationshipToSubscriber}
            />
            <Input
              label="Subscriber DOB (M/D/Y):"
              name="subscriberDOB"
              type="date"
              placeholder="(D/M/Y)"
              value={formik.values.subscriberDOB || ""}
              onChange={formik.handleChange}
              isError={formik.errors.subscriberDOB}
            />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Employer:"
              name="employer"
              value={formik.values.employer}
              onChange={formik.handleChange}
              isError={formik.errors.employer}
            />
          </div>
        </>
      )}
      {!formik.values.noDentalInsurance && additionalInsurance1 && (
        <>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-start mt-16">
            <h2>Additional Insurance Information</h2>
            {!additionalInsurance2 && (
              <button type="button" onClick={onAdditionalInsuranceRemove}>
                <h3 className="text-[#ff0000] underline">Remove</h3>
              </button>
            )}
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
            <Input
              label="Insurance Company:"
              name="insuranceCompany2"
              value={formik.values.insuranceCompany2}
              onChange={formik.handleChange}
              isError={formik.errors.insuranceCompany2}
            />
            <Input
              label="Group/Plan #:"
              name="groupPlan2"
              value={formik.values.groupPlan2}
              onChange={formik.handleChange}
              isError={formik.errors.groupPlan2}
            />
            <Input
              label="Contract/Cert #:"
              name="contractCert2"
              value={formik.values.contractCert2}
              onChange={formik.handleChange}
              isError={formik.errors.contractCert2}
            />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Name of Subscriber:"
              name="nameOfSubscriber2"
              value={formik.values.nameOfSubscriber2}
              onChange={formik.handleChange}
              isError={formik.errors.nameOfSubscriber2}
            />
            <Input
              label="Relationship to Subscriber:"
              name="relationshipToSubscriber2"
              value={formik.values.relationshipToSubscriber2}
              onChange={formik.handleChange}
              isError={formik.errors.relationshipToSubscriber2}
            />
            <Input
              label="Subscriber DOB (M/D/Y):"
              name="subscriberDOB2"
              type="date"
              placeholder="(D/M/Y)"
              value={formik.values.subscriberDOB2 || ""}
              onChange={formik.handleChange}
              isError={formik.errors.subscriberDOB2}
            />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Employer:"
              name="employer2"
              value={formik.values.employer2}
              onChange={formik.handleChange}
              isError={formik.errors.employer2}
            />
          </div>
        </>
      )}

      {!formik.values.noDentalInsurance && additionalInsurance2 && (
        <>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-start mt-16">
            <h2>Additional Insurance Information</h2>
            <button type="button" onClick={onAdditionalInsuranceRemove}>
              <h3 className="text-[#ff0000] underline">Remove</h3>
            </button>
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
            <Input
              label="Insurance Company:"
              name="insuranceCompany3"
              value={formik.values.insuranceCompany3}
              onChange={formik.handleChange}
              isError={formik.errors.insuranceCompany3}
            />
            <Input
              label="Group/Plan #:"
              name="groupPlan3"
              value={formik.values.groupPlan3}
              onChange={formik.handleChange}
              isError={formik.errors.groupPlan3}
            />
            <Input
              label="Contract/Cert #:"
              name="contractCert3"
              value={formik.values.contractCert3}
              onChange={formik.handleChange}
              isError={formik.errors.contractCert3}
            />
          </div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Name of Subscriber:"
              name="nameOfSubscriber3"
              value={formik.values.nameOfSubscriber3}
              onChange={formik.handleChange}
              isError={formik.errors.nameOfSubscriber3}
            />
            <Input
              label="Relationship to Subscriber:"
              name="relationshipToSubscriber3"
              value={formik.values.relationshipToSubscriber3}
              onChange={formik.handleChange}
              isError={formik.errors.relationshipToSubscriber3}
            />
            <Input
              label="Subscriber DOB (M/D/Y):"
              name="subscriberDOB3"
              type="date"
              placeholder="(D/M/Y)"
              value={formik.values.subscriberDOB3 || ""}
              onChange={formik.handleChange}
              isError={formik.errors.subscriberDOB3}
            />
          </div>
          <div className="hidden print-visible mt-[220px]"></div>
          <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Input
              label="Employer:"
              name="employer3"
              value={formik.values.employer3}
              onChange={formik.handleChange}
              isError={formik.errors.employer3}
            />
          </div>
        </>
      )}

      {!(additionalInsurance1 && additionalInsurance2) && !formik.values.noDentalInsurance && (
        <button
          type="button"
          onClick={onAdditionalInsuranceClick}
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
        <Input label="Date:" name="Date" type="date" placeholder="(D/M/Y)" />
      </div>
      <h3 className={`text-danger text-center mt-[9px] ${Object.keys(formik.errors).length === 0 && "invisible"}`}>
        Please fill all required fields
      </h3>
      <div className="mt-[19px] mb-7 md:mb-[54px] grid justify-center">
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
