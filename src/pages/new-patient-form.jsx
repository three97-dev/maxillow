import * as React from "react";
import { navigate } from "gatsby";
import html2canvas from "../html2canvas";
import jsPDF from "jspdf";

import Layout from "../components/Layout";
import Cta from "../containers/newPatientForm/Cta";
import Form_1 from "../containers/newPatientForm/Form_1";
import Form_2 from "../containers/newPatientForm/Form_2";
import Form_3 from "../containers/newPatientForm/Form_3";

const NewPatientFormPage = () => {
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(data[k].name, data[k].value);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = document.getElementById("formToPrint");
    html2canvas(input, {
      windowWidth: 1920,
      scale: 1,
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
        "input:not([type='file']):not([type='checkbox']):not([type='radio']), input:checked, textarea"
      );
      const senderName = `${[...inputs].find((element) => element.name === "First Name")?.value} ${
        [...inputs].find((element) => element.name === "Last Name")?.value
      }`;
      const pdfBlob = pdf.output("blob");
      const pseudoFile = new File([pdfBlob], `New patient ${senderName}.pdf`, {
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
        id="formToPrint"
        name="new-patient"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
        onSubmit={handleSubmit}
      >
        <Form_1 />
        <Form_2 />
        <Form_3 />
      </form>
    </Layout>
  );
};

export default NewPatientFormPage;
