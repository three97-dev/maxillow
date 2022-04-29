import * as React from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";
import Layout from "../components/Layout";
import RRenderer from "../components/richtextRenderer";

import ColoredButton from "../containers/forms/ColoredButton";

import FolderDownloadIcon from "../images/folder-download.svg";

const FormsPage = ({ data }) => {
  const formsPageData = data.contentfulFormsPage;

  const onDownloadClick = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[10px] px-[30px] sm:px-[81px] xl:px-[140px] py-[45px] lg:pt-[160px] lg:pb-[90px] mx-auto home-page-background">
        <div className="pb-0 lg:pb-[25px]">
          <h2 className="mb-[45px] lg:mb-[50px] text-center lg:text-left tracking-[1px] md:tracking-normal">
            {formsPageData.title1}
          </h2>
          <RRenderer
            data={formsPageData.description1}
            config={{
              p: "mb-[20px]",
            }}
          />
          <div className="mt-[50px]">
            <ColoredButton
              link={formsPageData.link1}
              subTitle={formsPageData.link1Subtitle}
              title={formsPageData.link1Title}
            />
            <ColoredButton
              link={formsPageData.link2}
              subTitle={formsPageData.link2Subtitle}
              title={formsPageData.link2Title}
            />
          </div>
        </div>
        <div className="lg:ml-[150px]">
          <h2 className="mt-12 lg:mt-0 mb-[45px] lg:mb-[50px] text-center lg:text-left tracking-[1px] md:tracking-normal">
            {formsPageData.title2}
          </h2>
          <RRenderer
            data={formsPageData.description2}
          />
          <div className="flex items-center mt-[28px] lg:mt-[45px] mb-[20px] lg:mb-[40px]">
            <img
              src={FolderDownloadIcon}
              alt="Download icon"
              className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
            ></img>
            <button
              onClick={() => onDownloadClick(formsPageData.file1.file)}
              className="text-[24px] md:text-[28px] leading-[34px] font-bold ml-[55px] lg:ml-[85px] hover:text-gray-500 text-left"
            >
              {formsPageData.file1Title}
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={FolderDownloadIcon}
              alt="Download icon"
              className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
            ></img>
            <button
              onClick={() => onDownloadClick(formsPageData.file2.file)}
              className="text-[24px] md:text-[28px] leading-[34px] font-bold ml-[55px] lg:ml-[85px] hover:text-gray-500 text-left"
            >
              {formsPageData.file2Title}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulFormsPage {
      title1
      description1 {
        raw
      }
      link1
      link1Title
      link1Subtitle
      link2
      link2Title
      link2Subtitle
      title2
      description2 {
        raw
      }
      file1Title
      file1 {
        file {
          fileName
          url
        }
      }
      file2Title
      file2 {
        file {
          fileName
          url
        }
      }
    }
  }
`;

export default FormsPage;
