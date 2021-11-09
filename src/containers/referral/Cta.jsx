import React from "react"
const Cta = () => {
  return (
    <header className="bg-primary p-16 px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px] md:pt-24 md:pb-20 flex flex-col xl:flex-row xl:text-right justify-center items-center text-center">
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
