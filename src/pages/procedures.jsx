import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection } from "../containers/aboutUs";
import { ProcedureSec, Section } from "./../containers/procedures";
import ProcedureContainer from "../containers/procedures/procedureContainer";

const Procedures = ({ data }) => {
  const heroData = data.allContentfulHeroProcedures;
  const procedures = data.subProcedures;
  const sectionData = data.allContentfulSectionProcedures.edges;

  return (
    <Layout>
      <HeroSection
        data={heroData}
        backgroundClass="bg-procedures-container"
        marBot
      />
      <ProcedureContainer>
        <ProcedureSec data={procedures} />
        <h2 className="mt-[50px] text-center">
          {sectionData[0].node.mainHeading}
        </h2>

        <p className="mt-[50px] mx-auto lg:max-w-4xl 2xl:max-w-7xl 3xl:max-w-[1364px]">
          The consultation is an opportunity to meet each other and discuss your
          surgery. We will review x-rays, medical history and other information
          relevant to your treatment. We always discuss your anesthetic options
          (local anesthesia, oral sedation, intravenous sedation or general
          anesthesia) along with risks/benefits and associated costs.
        </p>

        <div className="my-[100px] flex flex-col gap-[50px] lg:flex-row lg:gap-4">
          {sectionData.map((v, i) => {
            return (
              <Section
                key={i}
                src={v.node.image.file.url}
                title={v.node.title}
                mainHeading={v.node.mainHeading}
                description={v.node.description}
                footerText={v.node.footerText}
              />
            );
          })}
        </div>
      </ProcedureContainer>

      <SectionFooter
        data={{ subTitle: "Get In", title: "Contact", link: "/contact-us" }}
        footerBg="bg-secondary"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulHeroProcedures {
      edges {
        node {
          shortDescription
          mainHeading
          heroImage {
            file {
              url
            }
          }
          ctaText
        }
      }
    }
    subProcedures: allContentfulSubProcedure {
      edges {
        node {
          title
          slug
        }
      }
    }
    allContentfulSectionProcedures(sort: { fields: createdAt }) {
      edges {
        node {
          title
          mainHeading

          footerText
          description {
            raw
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default Procedures;
