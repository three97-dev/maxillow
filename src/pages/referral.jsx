import * as React from "react";
import Layout from "../components/Layout";
import Cta from "../containers/referral/Cta";
import Form_1 from "../containers/referral/Form_1";
import Form_2 from "../containers/referral/Form_2";
import Form_3 from "../containers/referral/Form_3";
import Form_4 from "../containers/referral/Form_4";
import Form_5 from "../containers/referral/Form_5";

import SectionFooter from "./../components/sectionFooter";

const Referal = () => {
  //  const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("SUBMITTED");
  //   };
  return (
    <Layout>
      <Cta />
      <form
        name="referral"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
        // onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="referral" />
        <Form_1 />
        <Form_2 />
        <Form_3 />
        <Form_4 />
        <Form_5 />
      </form>

      <SectionFooter
        data={{ subTitle: "Get In", title: "Contact", link: "/contact-us" }}
        footerBg="bg-secondary"
      />
    </Layout>
  );
};

export default Referal;
