import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection } from "../containers/aboutUs";
import { ProcedureSec, Section } from "./../containers/procedures";
import ProcedureContainer from "../containers/procedures/procedureContainer";
import RRenderer from "../components/richtextRenderer";

const Procedures = ({ data }) => {
  const heroData = data.allContentfulHeroProcedures;
  const procedures = data.subProcedures;
  const sectionData = data.allContentfulSectionProcedures.edges;
  const sectionContentData = data.allContentfulSectionPageContent.nodes[0];

  return (
    <Layout>
      <HeroSection
        data={heroData}
        backgroundClass="bg-procedures-container"
        marBot
      />
      <ProcedureContainer>
        <ProcedureSec data={procedures} />
        <h2 className="my-[50px] text-center">
          {sectionContentData.mainHeading}
        </h2>
        <RRenderer data={sectionContentData.mainContent} />
        <div className="my-[100px] flex flex-col space-y-[50px] lg:flex-row lg:space-x-4 lg:space-y-0">
          {sectionData.map((v, i) => {
            return (
              <Section
                key={i}
                src={v.node.image.file.url}
                title={v.node.title}
                description={v.node.description}
                footerText={v.node.footerText}
                inverse={i % 2 !== 0}
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
    allContentfulSectionPageContent {
      nodes {
        mainHeading
        mainContent {
          raw
        }
      }
    }
    allContentfulSectionProcedures(sort: { fields: createdAt }) {
      edges {
        node {
          title
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
