import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HeroSection from "../containers/homePage/hero";
import Slider from "../containers/homePage/slider";
import Surgery from "../containers/homePage/surgery";
import Form from "../containers/homePage/form";
import OurStaff from "../containers/homePage/our-staff";
import Facilities from "../containers/homePage/facilities";

import "../css/custom_forms_styles.scss";

const IndexPage = ({ data }) => {
  const pageData = data.allContentfulHomePage.edges[0].node;
  const testimonials = data.allContentfulTestimonials;
  const doctors = data.doctors.edges;
  return (
    <Layout>
      <div>
        <HeroSection
          data={pageData}
          doctors={doctors.sort((a, b) => {
            const firstOrder = a.node.displayOrder;
            const secondOrder = b.node.displayOrder;
            if (firstOrder > secondOrder) {
              return 1;
            } else if (firstOrder < secondOrder) {
              return -1;
            } else {
              return 0;
            }
          })}
        />
        <Surgery
          image={pageData.surgeryImage}
          title={pageData.surgeryTitle}
          description={pageData.surgeryDescription}
        />
        <Slider footerBg="bg-secondary" data={testimonials} />
        <OurStaff image={pageData.staffImage} title={pageData.staffTitle} description={pageData.staffDescription} />
        <Facilities
          images={pageData.facilitiesImages}
          title={pageData.facilitiesTitle}
          description={pageData.facilitiesDescription}
          firstFacility={pageData.firstFacility}
          secondFacility={pageData.secondFacility}
          thirdFacility={pageData.thirdFacility}
          fourthFacility={pageData.fourthFacility}
        />
        <Form image={pageData.formImage} title={pageData.formTitle} description={pageData.formDescription} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          welcomeTitle
          mainHeading
          heroDescription
          heroImage {
            title
            file {
              url
            }
          }
          surgeryTitle
          surgeryDescription {
            raw
          }
          surgeryImage {
            title
            file {
              url
            }
          }
          staffTitle
          staffDescription {
            raw
          }
          staffImage {
            title
            file {
              url
            }
          }
          facilitiesTitle
          facilitiesDescription {
            raw
          }
          facilitiesImages {
            title
            file {
              url
            }
          }
          firstFacility
          secondFacility
          thirdFacility
          fourthFacility
          formTitle
          formDescription {
            raw
          }
          formImage {
            title
            file {
              url
            }
          }
        }
      }
    }

    doctors: allContentfulServiceAboutUs(sort: { fields: createdAt }) {
      edges {
        node {
          title
          displayOrder
        }
      }
    }

    allContentfulSectionsHomepage(sort: { fields: createdAt }) {
      edges {
        node {
          title
          description {
            raw
          }
          image {
            title
            file {
              url
            }
          }
          footerTitle
          footerSubtitle
          footerLink
          isCentered
          reverse
        }
      }
    }

    allContentfulTestimonials(sort: { fields: createdAt }) {
      edges {
        node {
          author
          content {
            raw
          }
        }
      }
    }
  }
`;

export default IndexPage;
