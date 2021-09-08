import * as React from "react"
import { graphql } from "gatsby"
import { Contact, Address } from "./../containers/contactUs"
import Layout from "../components/Layout"
import SectionFooter from "./../components/sectionFooter"

const IndexPage = ({ data }) => {
  const addressData = data.allContentfulAddressLocationsJsonNode

  const { mapOneLink, mapTwoLink } = data.allContentfulAddress.edges[0].node

  return (
    <Layout>
      <Contact />
      <Address
        data={addressData}
        mapOneLink={mapOneLink.mapOneLink}
        mapTwoLink={mapTwoLink.mapTwoLink}
      />
      <SectionFooter
        footerBg="bg-primary"
        data={{
          title: "REFERRAL FORM",
          subTitle: "Download Our",
          link: "https://assets.ctfassets.net/wtwqjmvr7hi2/749ZWrb9x7zQkziRZtx96e/c9ed0696fc111c7340ac87c798c10ba4/maxillowinnipeg_referralform.pdf",
          target: "_blank",
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAddress {
      edges {
        node {
          mapOneLink {
            mapOneLink
          }
          mapTwoLink {
            mapTwoLink
          }
        }
      }
    }
    allContentfulAddressLocationsJsonNode {
      edges {
        node {
          office
          address
          address2
          address3
          contact
        }
      }
    }
  }
`

export default IndexPage
