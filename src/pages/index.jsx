import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";
import { HeroSection, Service, Slider } from "../containers/homePage";
//
import homeBgPattern from "../images/homeBgPattern.svg";
import Testimonials from "./../images/testimonails.png";

const IndexPage = ({ data }) => {
  const heroData = data.allContentfulHeroHomepage;
  const sectionsData = data.allContentfulSectionsHomepage.edges;
  const testimonials = data.allContentfulTestimonials;
  const doctors = data.doctors.edges;

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${homeBgPattern})`,
          backgroundRepeat: "repeat",
        }}
      >
        <HeroSection
          data={heroData}
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
          sections={sectionsData.map((sec) => sec.node.title)}
        />
        {sectionsData.map((v, i) => {
          return (
            <Service
              key={i}
              isCentered={v.node.isCentered}
              reverse={v.node.reverse}
              image={v.node.image}
              isPadding={false}
              title={v.node.title}
              description={v.node.description}
              first={i === 0}
              footer={{
                title: v.node.footerTitle,
                subTitle: v.node.footerSubtitle,
                link: v.node.footerLink,
              }}
              footer2={i % 2 !== 0}
              addBlob={i === 0}
              orangeDots={i === 1}
              blueDots={i === 2}
            />
          );
        })}

        <Slider
          src={Testimonials}
          footerBg="bg-secondary"
          data={testimonials}
        />
        <SectionFooter
          data={{ subTitle: "Get In", title: "Contact", link: "/contact-us" }}
          footerBg="bg-secondary"
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulHeroHomepage {
      edges {
        node {
          welcomeTitle
          mainHeading
          shortDescription
          heroImage {
            title
            file {
              url
            }
          }
          firstDoctor
          secondDoctor
          ctaLink
          ctaText
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
