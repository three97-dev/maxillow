import React from "react";

import Input from "./Input";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => e.target.reset())
      .catch((error) => console.log("Form Submission Failed!"));
  };

  return (
    <form
      id="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="contact-form" value="contact" />
      <input name="bot-field" className="hidden" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[17px] gap-y-[15px] mb-[15px]">
        <Input name="First name" placeholder="First name" />
        <Input name="Last name" placeholder="Last name" />
        <Input name="Email Address" placeholder="Email Address" type="email" />
        <Input name="Phone number" placeholder="Phone number" />
      </div>
      <textarea
        name="Message"
        placeholder="Message"
        className="w-full h-[180px] py-[13px] px-5 rounded-lg outline-none border border-primary"
      ></textarea>
      <div className="mt-8 grid justify-center">
        <button
          type="submit"
          className="px-[58px] py-[11px] border-2 rounded-full uppercase align-middle border-[#5EBDCA] text-[#5EBDCA] bg-[#FAFAFA] hover:bg-[#5EBDCA] hover:text-white hover:cursor-pointer transition-all duration-150"
        >
          <h4>Submit</h4>
        </button>
      </div>
    </form>
  );
};

export default Form;
