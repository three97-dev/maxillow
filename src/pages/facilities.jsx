import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection } from "../containers/aboutUs";
import Section from "../containers/facilities/section";
import FacilitiesContainer from "../containers/facilities";
import Slider from "../containers/facilities/slider";

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
        <h2 className="mt-[100px] text-center">What to Expect</h2>
        <p className="mt-[50px]">
          We are pleased to welcome you to Winnipeg’s newest oral and
          maxillofacial surgical facilities. Our northeast Winnipeg location is
          approximately 8 minutes from downtown with easy access from Henderson
          Highway or Main Street (via the Redwood Bridge). This facility is
          located in the brand new Henderson Professional Centre located at 755
          Henderson Highway Suite 303. Our west Winnipeg location is at 2305
          Portage Avenue (intersection of Portage Ave. and Mount Royal Rd.).
          Both of our facilities are wheelchair accessible and have free
          parking.
        </p>
        <div className="flex flex-col gap-[50px] mt-[50px] lg:grid lg:grid-cols-2 lg:gap-4">
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

      <Slider />
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
