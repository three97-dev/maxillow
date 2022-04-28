import React from "react";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import RadioButtonsGroup from "../../components/form/RadioButtonsGroup";

const Form_1 = () => {
  return (
    <div className="px-[30px] pt-12 md:pt-[60px] px-[30px] md:px-[81px] lg:px-[142px] 2xl:px-[140px]">
      <h2>Medical History</h2>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="Date:" name="Date" className="mt-6 lg:mt-[28px]" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Input label="First Name:" name="First Name" />
        <Input label="Last Name:" name="Last Name" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-x-4">
          <Input label="Manitoba Health #:" name="Manitoba Health #" />
          <Input label="PHIN (9 Digit):" name="PHIN (9 Digit)" />
        </div>
      </div>
      <div className="grid gap-x-4 grid-cols-1 xl:grid-cols-[calc(33%-5px),50%,auto]">
        <div className="grid gap-y-4 content-between my-2.5 md:mt-3 md:mb-8">
          <h3>Please rate your general health:</h3>
          <div className="flex flex-col md:flex-row justify-between items-center md:max-w-[463px] md:mb-1">
            <span className="hidden md:inline font-bold">Poor</span>
            <div className="flex md:hidden justify-between w-full">
              <span className="font-bold">Poor</span>
              <span className="font-bold">Excellent</span>
            </div>
            <div className="flex justify-between w-full md:w-[60%] mt-1.5 md:mt-0">
              <RadioButtonsGroup name="General health" options={["1", "2", "3", "4", "5"]} className="mb-0" />
            </div>
            <span className="hidden md:inline font-bold">Excellent</span>
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-3 content-between mt-2 mb-2.5 md:my-3">
          <h3>Has there been any change in your health in the past year?</h3>
          <div className="flex flex-col md:flex-row">
            <div className="flex">
              <RadioButtonsGroup
                name="Has there been any change in your health in the past year?"
                options={["Yes", "No"]}
                className="ml-8 first:ml-0 mb-1.5"
              />
            </div>
            <Textarea
              label="Please Describe:"
              name="Please Describe (Change in health)"
              isLabelLeft
              className="w-full md:ml-16 mb-0"
            />
          </div>
        </div>
      </div>
      <Textarea
        label="Please list ALL current MEDICATIONS, non-prescription drugs, or herbal remedies:"
        name="Please list ALL current MEDICATIONS, non-prescription drugs, or herbal remedies"
        className="w-full md:mt-0"
      />
      <div className="grid gap-x-4 grid-cols-1 xl:grid-cols-[calc(33%-5px),50%,auto]">
        <div className="grid gap-y-4 md:gap-y-9 content-between my-2.5 md:my-3">
          <h3>Do you have any MEDICATION ALLERGIES?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Do you have any MEDICATION ALLERGIES?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 content-between mt-1 md:my-3">
          <h3>If you do have MEDICATION ALLERGIES, please indicate if any of the following:</h3>
          <div className="flex flex-col md:flex-row justify-between md:w-[621px]">
            <RadioButtonsGroup
              name="If you do have MEDICATION ALLERGIES, please indicate if any of the following"
              options={["Penicillin/Amoxicillin", "Sulfa", "Morphine", "Codeine", "Other"]}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-x-4 grid-cols-1 2xl:grid-cols-[calc(33%+12px),50%,auto]">
        <div className="grid gap-y-4 md:gap-y-9 content-between md:mt-1.5 md:mb-6">
          <h3>Describe the reaction(s) you had:</h3>
          <div className="flex flex-wrap flex-col md:flex-row justify-between max-w-[538px]">
            <RadioButtonsGroup
              name="Describe the reaction(s) you had"
              options={["Hives", "Swelling", "Rash", "Anaphylaxis", "Other:"]}
            />
          </div>
        </div>
        <Textarea name="Other (Describe the reaction)" className="md:w-[479px] justify-end" />
      </div>
      <div className="grid gap-x-4 grid-cols-1 2xl:grid-cols-[calc(33%-5px),calc(48%-8px),auto]">
        <div className="grid gap-y-4 md:gap-y-2 content-between my-2.5 md:mt-1.5 md:mb-10">
          <h3>Have you ever had an allergic reaction to LATEX?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Have you ever had an allergic reaction to LATEX?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-3 content-between mt-2 md:mb-3">
          <h3>Have you ever had an allergic reaction to any medication?</h3>
          <div className="flex flex-col md:flex-row">
            <div className="flex">
              <RadioButtonsGroup
                name="Have you ever had an allergic reaction to any medication?"
                options={["Yes", "No"]}
                className="ml-8 first:ml-0 mb-0"
              />
            </div>
            <Textarea
              label="Please describe:"
              name="Please Describe (Have you ever had an allergic reaction to any medication)"
              isLabelLeft
              className="w-full md:ml-8 mt-4"
            />
          </div>
        </div>
      </div>
      <Textarea
        label="Please list any SURGERY you have had in the past (tooth extractions AND other body areas such as tonsils, hernia repair, hip or knee replacements, etc.)"
        name="Please list any SURGERY you have had in the past (tooth extractions AND other body areas such as tonsils, hernia repair, hip or knee replacements, etc.)"
        className="w-full md:mt-0"
      />
      <div className="flex flex-wrap">
        <div className="grid gap-y-4 md:gap-y-9 content-between w-[690px] my-2 md:mt-2.5">
          <h3>Have you ever been hospitalized or visited an emergency room?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Have you ever been hospitalized or visited an emergency room?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-[650px] my-2 md:mt-2.5">
          <h3>Have you ever been diagnosed with a bleeding/clotting disorder?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Have you ever been diagnosed with a bleeding/clotting disorder?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-[690px] my-2 md:mt-2.5">
          <h3>Were there any anesthetic problems with any previous surgery?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Were there any anesthetic problems with any previous surgery?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-[720px] my-2 md:mt-2.5">
          <h3>Do you take anticoagulants or blood thinners (Aspirin, Warfarn, Plavix, etc.)</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Do you take anticoagulants or blood thinners (Aspirin, Warfarn, Plavix, etc.)"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-full my-2 md:mt-2.5">
          <h3>Have you or anyone in your family ever been diagnosed with Malignant Hyperthermia?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Have you or anyone in your family ever been diagnosed with Malignant Hyperthermia?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-full my-2 md:mt-2.5">
          <h3>Was there any bleeding problems with any previous surgery?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Was there any bleeding problems with any previous surgery?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
      </div>
      <Textarea
        label="Please list some of the activities you do to stay active:"
        name="Please list some of the activities you do to stay active"
        className="w-full"
      />
      <div className="flex flex-wrap">
        <div className="grid gap-y-4 md:gap-y-9 content-between w-[690px] my-1 md:my-3">
          <h3>How many times a week would you do these activities?</h3>
          <div className="grid grid-cols-[repeat(auto-fill,40px)] md:grid-cols-8 gap-x-[30px] md:gap-x-0 gap-y-4 justify-between md:max-w-[428px]">
            <RadioButtonsGroup
              name="How many times a week would you do these activities?"
              options={["1", "2", "3", "4", "5", "6", "7", "8"]}
              className="mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between my-3">
          <h3>If you were to go for a walk, how many blocks could you walk before tiring?</h3>
          <div className="flex justify-between md:max-w-[252px]">
            <RadioButtonsGroup
              name="If you were to go for a walk, how many blocks could you walk before tiring?"
              options={["1", "2", "3", "4", "5"]}
              className="mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between md:w-[830px] my-1">
          <h3>Do you ever get pain in your chest while walking or doing these activities?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Do you ever get pain in your chest while walking or doing these activities?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-9 content-between w-full my-2.5 md:my-1">
          <h3>Do you ever get short of breath while walking or doing these activities?</h3>
          <div className="flex">
            <RadioButtonsGroup
              name="Do you ever get short of breath while walking or doing these activities?"
              options={["Yes", "No"]}
              className="ml-8 first:ml-0 mb-0"
            />
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-2 content-between w-full md:w-[690px] my-2 md:my-3">
          <h3>Do you use alcohol?</h3>
          <div className="flex md:mt-7">
            <RadioButtonsGroup
              name="Do you use alcohol?"
              options={["No", "Yes, please qualify below"]}
              className="ml-9 first:ml-0 mb-0"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between md:w-[490px]">
            <Input label="Drinks per," name="Drinks" isLabelRight className="my-0" />
            <div className="flex mt-5 md:mt-0">
              <RadioButtonsGroup name="Per" options={["Day", "Week", "Month"]} className="ml-7 first:ml-0 mb-0" />
            </div>
          </div>
        </div>
        <div className="grid gap-y-4 md:gap-y-2 content-between my-2.5 md:my-3">
          <h3>Do you smoke cigarettes?</h3>
          <div className="flex md:mt-7">
            <RadioButtonsGroup
              name="Do you smoke cigarettes?"
              options={["No", "Yes, please qualify below"]}
              className="ml-9 first:ml-0 mb-0"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <Input label="Cigarettes per day" name="Cigarettes per day" isLabelRight className="my-1" />
            <Input label="Years smoking" name="Years smoking" isLabelRight className="my-0 md:ml-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_1;
