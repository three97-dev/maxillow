import React, { useState } from "react";
import { navigate } from "gatsby";
import html2canvas from "../html2canvas";
import jsPDF from "jspdf";
import { useFormik } from "formik";
import * as Yup from "yup";

import Layout from "../components/Layout";
import Cta from "../containers/newPatientForm/Cta";
import Form_1 from "../containers/newPatientForm/Form_1";
import Form_2 from "../containers/newPatientForm/Form_2";
import Form_3 from "../containers/newPatientForm/Form_3";

const NewPatientFormPage = () => {
  const [additionalInsurance1, setAdditionalInsurance1] = useState(false);
  const [additionalInsurance2, setAdditionalInsurance2] = useState(false);

  const onAdditionalInsuranceClick = () => {
    if (additionalInsurance1) {
      setAdditionalInsurance2(true);
    } else {
      setAdditionalInsurance1(true);
    }
  };

  const onAdditionalInsuranceRemove = () => {
    if (additionalInsurance2) {
      setAdditionalInsurance2(false);
    } else {
      setAdditionalInsurance1(false);
    }
  };

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(data[k].name, data[k].value);
    });
    return formData;
  };

  const handleSubmit = () => {
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

  const stringRequiredInput = Yup.string().when("noDentalInsurance", { is: false, then: Yup.string().required() });

  const newPatientSchema = {
    insuranceCompany: stringRequiredInput,
    groupPlan: stringRequiredInput,
    contractCert: stringRequiredInput,
    nameOfSubscriber: stringRequiredInput,
    relationshipToSubscriber: stringRequiredInput,
    subscriberDOB: stringRequiredInput,
    employer: stringRequiredInput,
  };

  const additionalInsurance1InformationSchema = {
    ...newPatientSchema,
    insuranceCompany2: stringRequiredInput,
    groupPlan2: stringRequiredInput,
    contractCert2: stringRequiredInput,
    nameOfSubscriber2: stringRequiredInput,
    relationshipToSubscriber2: stringRequiredInput,
    subscriberDOB2: stringRequiredInput,
    employer2: stringRequiredInput,
  };

  const additionalInsurance2InformationSchema = {
    ...additionalInsurance1InformationSchema,
    insuranceCompany3: stringRequiredInput,
    groupPlan3: stringRequiredInput,
    contractCert3: stringRequiredInput,
    nameOfSubscriber3: stringRequiredInput,
    relationshipToSubscriber3: stringRequiredInput,
    subscriberDOB3: stringRequiredInput,
    employer3: stringRequiredInput,
  };

  const getValidationSchema = () => {
    if (additionalInsurance2) {
      return Yup.object(additionalInsurance2InformationSchema);
    } else if (additionalInsurance1) {
      return Yup.object(additionalInsurance1InformationSchema);
    } else {
      return Yup.object(newPatientSchema);
    }
  };

  const formik = useFormik({
    initialValues: {
      noDentalInsurance: false,
      insuranceCompany: "",
      groupPlan: "",
      contractCert: "",
      nameOfSubscriber: "",
      relationshipToSubscriber: "",
      SubscriberDOB: "",
      employer: "",
      insuranceCompany2: "",
      groupPlan2: "",
      contractCert2: "",
      nameOfSubscriber2: "",
      relationshipToSubscriber2: "",
      SubscriberDOB2: "",
      employer2: "",
      insuranceCompany3: "",
      groupPlan3: "",
      contractCert3: "",
      nameOfSubscriber3: "",
      relationshipToSubscriber3: "",
      SubscriberDOB3: "",
      employer3: "",
    },
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    onSubmit: () => {
      handleSubmit();
    },
  });

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
        onSubmit={formik.handleSubmit}
      >
        <input type="hidden" name="form-name" value="new-patient" />
        <input name="bot-field" className="hidden" />
        <Form_1 />
        <Form_2 />
        <Form_3
          formik={formik}
          additionalInsurance1={additionalInsurance1}
          additionalInsurance2={additionalInsurance2}
          onAdditionalInsuranceClick={onAdditionalInsuranceClick}
          onAdditionalInsuranceRemove={onAdditionalInsuranceRemove}
        />
        <input name="pdfFile" type="file" className="hidden" />
      </form>
    </Layout>
  );
};

export default NewPatientFormPage;
