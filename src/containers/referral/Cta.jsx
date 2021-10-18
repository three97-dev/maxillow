import React from "react"
const Cta = () => {
  return (
    <header className="bg-primary p-16 sm:px-24 md:px-36 md:pt-24 md:pb-20 2xl:px-80 3xl:px-96 flex flex-col xl:flex-row xl:text-right justify-center items-center text-center">
      <h1 className="text-white mb-4 xl:mb-0   xl:pr-12 flex-shrink-0">
        Make A Referral
      </h1>
      <p className="text-white xl:pl-12 xl:text-left xl:border-l-2">
        If you want to refer one of your patients for a procedure at our
        practice, please fill out the following form and we will get back to you
        and/or your patient about scheduling an appointment.
      </p>
    </header>
  );
};

export default Cta;
