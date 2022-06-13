import React from "react";
import { navigate } from "gatsby";
import html2canvas from "../html2canvas";
import jsPDF from "jspdf";

import Layout from "../components/Layout";
import Cta from "../containers/referral/Cta";
import Form_1 from "../containers/referral/Form_1";
import Form_2 from "../containers/referral/Form_2";
import Form_3 from "../containers/referral/Form_3";
import Form_4 from "../containers/referral/Form_4";
import Form_5 from "../containers/referral/Form_5";

import SectionFooter from "./../components/sectionFooter";

import "../css/pdf-view.scss";

const Referral = () => {
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(data[k].name, data[k].value);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById("divIdToPrint");
    html2canvas(input, {
      windowWidth: 1400,
      scale: 1.5,
      onclone: function (document) {
        document.querySelector("body").className += "pdf-view";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF("p", "mm");
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");

      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
        heightLeft -= pageHeight;
      }

      const inputs = document.querySelectorAll(
        "input:not([type='file']):not([type='checkbox']), input:checked, textarea"
      );
      const senderName = [...inputs].find((element) => element.name === "name")?.value;
      const pdfBlob = pdf.output("blob");
      const pseudoFile = new File([pdfBlob], `Referral for ${senderName}.pdf`, {
        type: "application/pdf",
      });

      const data = [...inputs, { name: "pdfFile", value: pseudoFile }];

      fetch("/", {
        method: "POST",
        body: encode(data),
      })
        .then(() => navigate("/"))
        .catch((error) => console.log("Form Submission Failed!"));
    });
  };

  return (
    <Layout>
      <Cta />
      <form
        id="divIdToPrint"
        name="referral"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="referral" />
        <input name="bot-field" className="hidden" />
        <Form_1 />
        <Form_2 />
        <Form_3 />
        <Form_4 />
        <Form_5 />
        <input name="pdfFile" type="file" className="hidden" />
      </form>
      <SectionFooter data={{ subTitle: "Get In", title: "Contact", link: "/contact-us" }} footerBg="bg-secondary" />
    </Layout>
  );
};

export default Referral;
