import React from "react";
import Input from "../../components/form/Input";

const Form_2 = () => {
  return (
    <div className="px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] pt-0 lg:py-[27px]">
      <h2>Responsible Party</h2>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mt-5">
        <Input label="First Name:" name="First Name (Responsible Party)" className="mt-3" />
        <Input label="Last Name:" name="Last Name (Responsible Party)" />
        <Input label="Relationship:" name="Relationship" className="xl:w-[calc(50%-8px)]" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Primary Phone:" name="Primary Phone (Responsible Party)" />
        <Input label="Alternate Phone:" name="Alternate Phone (Responsible Party)" />
        <Input label="Email Address:" name="Email Address (Responsible Party)" type="email" />
      </div>
    </div>
  );
};

export default Form_2;
