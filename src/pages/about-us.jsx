import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SectionFooter from "./../components/sectionFooter"
import { HeroSection, AssociationSec } from "../containers/aboutUs"
import Doctor from "../containers/aboutUs/doctor"
import AboutUsIntroSection from "../containers/aboutUs/introSection"

//
import homeBgPattern from "../images/homeBgPattern.svg"

const AboutUs = ({ data }) => {
  const aboutHeroData = data.allContentfulHeroAboutUs
  const associationsData = data.allContentfulAssociations
  const serviceData = data.allContentfulServiceAboutUs.edges
  const introData = data.contentfulAboutUsIntro

  return (
    <Layout>
      <HeroSection data={aboutHeroData} />
      <div
        style={{
          backgroundImage: `url(${homeBgPattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: 240,
        }}
      >
        <AboutUsIntroSection
          data={introData}
          footer={{
            subTitle: "View Our",
            title: "PROCEDURES",
            link: "/procedures",
          }}
        />
        {/* <SectionFooter
          footerBg="bg-primary"
          data={{
            subTitle: "View Our",
            title: "PROCEDURES",
            link: "/procedures",
          }}
        /> */}

        {serviceData
          .sort((a, b) => {
            const firstOrder = a.node.displayOrder
            const secondOrder = b.node.displayOrder
            if (firstOrder > secondOrder) {
              return 1
            } else if (firstOrder < secondOrder) {
              return -1
            } else {
              return 0
            }
          })
          .map((v, i) => {
            const inverse = i % 2 === 0
            return (
              <Doctor
                src={v.node.image.file.url}
                title={v.node.title}
                description={v.node.description}
                quote={v.node.quote}
                inverse={inverse}
              />
            )
          })}

        <AssociationSec data={associationsData} />
        <SectionFooter
          footerBg="bg-secondary"
          data={{
            subTitle: "Get In",
            title: "Contact",
            link: "/contact-us",
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHeroAboutUs {
      edges {
        node {
          mainHeading
          shortDescription
          ctaText
          heroImage {
            file {
              url
            }
          }
        }
      }
    }

    contentfulAboutUsIntro {
      title
      image {
        file {
          url
        }
      }
      quote {
        quote
      }
      description {
        raw
      }
    }

    allContentfulServiceAboutUs(sort: { fields: createdAt }) {
      edges {
        node {
          title
          quote
          displayOrder
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

    allContentfulAssociations {
      edges {
        node {
          title
          description
          images {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default AboutUs
