import * as React from "react";
import { graphql } from "gatsby";
import { Contact, Address } from "./../containers/contactUs";
import Layout from "../components/Layout";
import SectionFooter from "./../components/sectionFooter";

const IndexPage = ({ data }) => {
  const addressData = data.allContentfulAddressLocationsJsonNode;

  const { title, contactPhoneNumber, contactFaxNumber, text, mapOneLink, mapTwoLink } =
    data.allContentfulAddress.edges[0].node;

  return (
    <Layout>
      <Contact />
      <Address
        data={addressData}
        title={title}
        phone={contactPhoneNumber}
        fax={contactFaxNumber}
        text={text.text}
        mapOneLink={mapOneLink.mapOneLink}
        mapTwoLink={mapTwoLink.mapTwoLink}
      />
      <SectionFooter
        footerBg="bg-primary"
        data={{
          title: "REFERRAL FORM",
          subTitle: "Download Our",
          link: "https://assets.ctfassets.net/wtwqjmvr7hi2/749ZWrb9x7zQkziRZtx96e/90e103863a91b7bfdbb58ccf06c2cb92/349896_3_Maxillo_WPG_Referrals_Pads.pdf",
          target: "_blank",
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAddress {
      edges {
        node {
          title
          contactPhoneNumber
          contactFaxNumber
          text {
            text
          }
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
        }
      }
    }
  }
`;

export default IndexPage;
