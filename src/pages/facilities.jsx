import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection } from "../containers/aboutUs";
import Section from "../containers/facilities/section";
import FacilitiesContainer from "../containers/facilities";

const Facilities = ({ data }) => {
  const facilitiesHeroData = data.allContentfulHeroFacilities;
  const sectionsData = data.allContentfulSectionsFacilities.edges;

  return (
    <Layout>
      <HeroSection
        backgroundClass="bg-facilities-container"
        data={facilitiesHeroData}
      />
      <FacilitiesContainer>
        {sectionsData.map((v, i) => (
          <Section
            image={v.node.image}
            title={v.node.title}
            subTitle={v.node.subTitle}
            description={v.node.description}
            reverse={i % 2 !== 0}
          />
        ))}
      </FacilitiesContainer>

      <SectionFooter
        data={{
          title: "Contact",
          subTitle: "Get In",
          link: "/contact-us",
        }}
        footerBg="bg-secondary"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulHeroFacilities {
      edges {
        node {
          mainHeading
          shortDescription
          heroImage {
            file {
              url
            }
          }
          ctaText
        }
      }
    }
    allContentfulSectionsFacilities(sort: { fields: createdAt }) {
      edges {
        node {
          title
          description {
            raw
          }
          subTitle
          image {
            file {
              url
            }
          }
          reverse
        }
      }
    }
  }
`;
export default Facilities;
