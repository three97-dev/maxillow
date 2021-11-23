import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection } from "../containers/aboutUs";
import Section from "../containers/facilities/section";
import FacilitiesContainer from "../containers/facilities";
import Slider from "../containers/facilities/slider";
import patternOrange from "../images/pattern.svg";
import RRenderer from "../components/richtextRenderer";

const Facilities = ({ data }) => {
  const facilitiesHeroData = data.allContentfulHeroFacilities;
  const sectionsData = data.allContentfulSectionsFacilities.edges;
  const lightBoxImages =
    data.allContentfulLightboxFacilities.edges[0].node.images;
  const containerData = data.allContentfulContainerFacilities.nodes[0];

  return (
    <Layout>
      <HeroSection
        backgroundClass="bg-facilities-container"
        data={facilitiesHeroData}
      />
      <FacilitiesContainer>
        <h2 className="mt-[100px] text-center">
          {containerData.containerTitle}
        </h2>
        <RRenderer
          data={containerData.containerContent}
          config={{
            p: "mt-[50px]",
          }}
        />
        <div className="flex flex-col space-y-[50px] mt-[50px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
          {sectionsData.map((v, i) => (
            <Section
              image={v.node.image}
              title={v.node.title}
              subTitle={v.node.subTitle}
              description={v.node.description}
              reverse={i % 2 !== 0}
              key={i}
            />
          ))}
        </div>
      </FacilitiesContainer>

      <div className="relative">
        <img
          src={patternOrange}
          className="absolute hidden lg:block left-[-72px] top-[350px] w-[110px] h-[240px]"
        />
        <Slider
          lightBoxImages={lightBoxImages}
          title={containerData.sliderTitle}
          content={containerData.sliderContent}
        />
      </div>

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
    allContentfulContainerFacilities {
      nodes {
        containerTitle
        containerContent {
          raw
        }
        sliderTitle
        sliderContent {
          raw
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
    allContentfulLightboxFacilities {
      edges {
        node {
          id
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
export default Facilities;
