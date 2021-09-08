import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import { HeroSection } from "../containers/aboutUs"
import { ProcedureContextSec } from "./../containers/procedures"
import SectionFooter from "../components/sectionFooter"
import OtherOptions from "../containers/procedures/OtherOptions"
import ProcedureContainer from "../containers/procedures/procedureContainer"

const SubProcedure = ({ data }) => {
  const subProcedure = data.subProcedure.edges[0].node
  const lastSection = subProcedure.sections.length - 1

  return (
    <Layout>
      <HeroSection
        backgroundColor="bgSecondary"
        miniHeading="Procedures"
        data={{
          edges: [
            {
              node: {
                mainHeading: subProcedure.title,
                shortDescription: subProcedure.description.description,
                ctaText: "Learn More",
                heroImage: subProcedure.image,
              },
            },
          ],
        }}
      />
      <ProcedureContainer patternGroupTwo>
        {subProcedure.sections.map((section, i) => (
          <>
            <ProcedureContextSec
              title={section.title}
              description={section.description}
              noBottomBorder={i === lastSection}
              first={i === 0}
            />
          </>
        ))}
      </ProcedureContainer>

      {subProcedure.footerTitle && (
        <OtherOptions
          data={{
            footerTitle: subProcedure.footerTitle,
            footerContent: subProcedure.footerContent,
          }}
        />
      )}

      <SectionFooter
        data={{ subTitle: "Get In", title: "Contact", link: "/contact-us" }}
        footerBg="bg-secondary"
      />
    </Layout>
  )
}

export const query = graphql`
  query SubProcedureQuery($slug: String) {
    subProcedure: allContentfulSubProcedure(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          description {
            description
          }
          image {
            file {
              url
            }
          }
          sections {
            title
            description {
              raw
            }
          }
          footerTitle
          footerContent {
            raw
          }
        }
      }
    }
  }
`

export default SubProcedure
