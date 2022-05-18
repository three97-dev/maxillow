import React from "react";
import Dropdown from "../../components/form/Dropdown";
import Input from "../../components/form/Input";
import RadioButtonsGroup from "../../components/form/RadioButtonsGroup";

const areYouAStudentOptions = ["Yes, Full-Time", "Yes, Part-Time", "No, I’m not a student"];
const insuranceCoverageOptions = ["Yes", "No, I opted out"];

const Form_1 = ({ formik }) => {
  return (
    <div className="px-[30px] pt-12 md:pt-16 px-[30px] lg:px-[81px] 2xl:px-[140px]">
      <h2>Personal Information</h2>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Dropdown
          placeholder="Please select"
          name="Title"
          label="Title:"
          option={["Dr.", "Mr.", "Mrs.", "Ms.", "Miss.", "Mstr."]}
          className="mt-6 lg:mt-[28px]"
        />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input
          label="First Name:"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          isError={formik.errors.firstName}
        />
        <Input
          label="Last Name:"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          isError={formik.errors.lastName}
        />
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2">
          <Input label="Middle Initial:" name="Middle Initial" />
          <Input
            label="Date of Birth:"
            name="dateOfBirth"
            type="date"
            placeholder="(D/M/Y)"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            isError={formik.errors.dateOfBirth}
          />
        </div>
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Primary Phone:" name="Primary Phone" />
        <Input label="Alternate Phone:" name="Alternate Phone" />
        <Input label="Email Address:" name="Email Address" type="email" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input
          label="Mailing Address:"
          name="mailingAddress"
          value={formik.values.mailingAddress}
          onChange={formik.handleChange}
          isError={formik.errors.mailingAddress}
        />
        <Input
          label="City/Town:"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          isError={formik.errors.city}
        />
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2">
          <Input label="Province:" name="Province" />
          <Input label="Postal Code:" name="Postal Code" />
        </div>
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Patients Dentist:" name="Patients Dentist" />
        <Input label="Family Physician:" name="Family Physician" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Patient Referred By:" name="Patient Referred By" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 xl:grid-cols-2">
        <div className="grid gap-y-5 content-between my-2.5 md:my-3 md:-mr-4">
          <h3>Are you currently a student:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:mb-3 justify-items-start">
            <RadioButtonsGroup name="Are you currently a student" options={areYouAStudentOptions} />
          </div>
        </div>
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-[66%,1fr]">
          <Input label="Name of school you attend (If you are a student):" name="Name of school you attend" />
          <Input label="Student Number:" name="Student Number" className="content-between" />
        </div>
        <div className="grid gap-y-5 xl:gap-y-8 content-between my-2.5 md:mt-0 md:mb-5 md:-mr-4">
          <h3>Do you have insurance coverage through school?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:mb-[14px] justify-items-start">
            <RadioButtonsGroup
              name="Do you have insurance coverage through school?"
              options={insuranceCoverageOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_1;
