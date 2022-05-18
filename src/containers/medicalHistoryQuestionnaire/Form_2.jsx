import React, { useState } from "react";
import Checkbox from "../../components/form/Checkbox";
import RadioButtonsGroup from "../../components/form/RadioButtonsGroup";
import Textarea from "../../components/form/Textarea";

const Form_2 = ({ formik }) => {
  return (
    <div className="px-[30px] px-[30px] lg:px-[81px] 2xl:px-[140px] pt-5 lg:py-10">
      <h2>Pre-Existing Medical Conditions</h2>
      <div className="grid gap-y-0.5 md:gap-y-5 content-between my-4 md:mt-4 md:mb-8">
        <h3 className="hidden md:inline">Please check any and all of the conditions that apply:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 auto-rows-fr gap-y-0.5 md:gap-y-[11px] gap-x-4 justify-items-start 2xl:grid-rows-5 2xl:grid-flow-col md:mt-2">
          <Checkbox label="Chest pain/Angina" name="Pre-Existing Medical Conditions[]" value="Chest pain/Angina" />
          <Checkbox label="Heart Attack" name="Pre-Existing Medical Conditions[]" value="Heart Attack" />
          <Checkbox label="Stroke or TIA" name="Pre-Existing Medical Conditions[]" value="Stroke or TIA" />
          <Checkbox
            label="Heart Valve Replacement"
            name="Pre-Existing Medical Conditions[]"
            value="Heart Valve Replacement"
          />
          <Checkbox label="High Blood Pressure" name="Pre-Existing Medical Conditions[]" value="High Blood Pressure" />
          <Checkbox label="Pacemaker" name="Pre-Existing Medical Conditions[]" value="Pacemaker" />
          <Checkbox label="COPD" name="Pre-Existing Medical Conditions[]" value="COPD" />
          <Checkbox label="Asthma" name="Pre-Existing Medical Conditions[]" value="Asthma" />
          <Checkbox label="Cancer" name="Pre-Existing Medical Conditions[]" value="Cancer" />
          <Checkbox label="Hepatitis C" name="Pre-Existing Medical Conditions[]" value="Hepatitis C" />
          <Checkbox label="Steroid Treatment" name="Pre-Existing Medical Conditions[]" value="Steroid Treatment" />
          <Checkbox label="Hepatitis B" name="Pre-Existing Medical Conditions[]" value="Hepatitis B" />
          <Checkbox label="Stomach Ulcers" name="Pre-Existing Medical Conditions[]" value="Stomach Ulcers" />
          <Checkbox label="Arthritis" name="Pre-Existing Medical Conditions[]" value="Arthritis" />
          <Checkbox label="HIV/AIDS" name="Pre-Existing Medical Conditions[]" value="HIV/AIDS" />
          <Checkbox label="Seizures/Epilepsy" name="Pre-Existing Medical Conditions[]" value="Seizures/Epilepsy" />
          <Checkbox label="Kidney Disease" name="Pre-Existing Medical Conditions[]" value="Kidney Disease" />
          <Checkbox label="Low Thyroid" name="Pre-Existing Medical Conditions[]" value="Low Thyroid" />
          <Checkbox label="High Thyroid" name="Pre-Existing Medical Conditions[]" value="High Thyroid" />
          <Checkbox label="Acid Reflux/GERD" name="Pre-Existing Medical Conditions[]" value="Acid Reflux/GERD" />
          <Checkbox label="Addiction - Drugs" name="Pre-Existing Medical Conditions[]" value="Addiction - Drugs" />
          <Checkbox label="Addiction - Alcohol" name="Pre-Existing Medical Conditions[]" value="Addiction - Alcohol" />
          <Checkbox
            label="Recreational Drug Use (THC, cocaine, etc.)"
            name="Pre-Existing Medical Conditions[]"
            value="Recreational Drug Use (THC, cocaine, etc.)"
          />
          <Checkbox label="Cold Sores" name="Pre-Existing Medical Conditions[]" value="Cold Sores" />
          <Checkbox label="Tuberculosis" name="Pre-Existing Medical Conditions[]" value="Tuberculosis" />
          <Checkbox label="Sleep Apnea" name="Pre-Existing Medical Conditions[]" value="Sleep Apnea" />
          <Checkbox label="Snoring" name="Pre-Existing Medical Conditions[]" value="Snoring" />
          <Checkbox label="Osteoporosis" name="Pre-Existing Medical Conditions[]" value="Osteoporosis" />
          <Checkbox label="Psychiatric Care" name="Pre-Existing Medical Conditions[]" value="Psychiatric Care" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4">
          <div className="flex items-center justify-between">
            <Checkbox
              label="Diabetes"
              name="diabetesSelected"
              value={formik.values.diabetesSelected}
              onChange={() => formik.setFieldValue("diabetesSelected", !formik.values.diabetesSelected)}
            />
            <span className={`hidden md:inline text-right ml-1 ${!formik.values.diabetesSelected && "invisible"}`}>
              Please Describe:
            </span>
          </div>
          <div className="flex mx-auto md:m-0">
            <RadioButtonsGroup
              name="diabetesType"
              options={["Type 1", "Type 2"]}
              onChange={(value) => formik.setFieldValue("diabetesType", value)}
              className="ml-4 first:ml-0 mb-0"
              isHidden={!formik.values.diabetesSelected}
              isError={formik.errors.diabetesType && formik.touched.diabetesType}
            />
          </div>
        </div>
      </div>
      <Textarea
        label="Please list any other health issues of which we should be aware:"
        name="Please list any other health issues of which we should be aware"
        className="w-full"
      />
    </div>
  );
};

export default Form_2;
