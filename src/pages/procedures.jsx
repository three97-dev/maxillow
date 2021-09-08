import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SectionFooter from './../components/sectionFooter';
import { HeroSection } from '../containers/aboutUs';
import { ProcedureSec, Section } from './../containers/procedures';
import ProcedureContainer from '../containers/procedures/procedureContainer';

const Procedures = ({ data }) => {
  const heroData = data.allContentfulHeroProcedures;
  const procedures = data.subProcedures;
  const sectionData = data.allContentfulSectionProcedures.edges;

  return (
    <Layout>
      <HeroSection data={heroData} backgroundColor='bgSecondary' marBot />
      <ProcedureContainer>
        <ProcedureSec data={procedures} />
        {sectionData.map((v, i) => {
          return (
            <div key={i}>
              <Section
                src={v.node.image.file.url}
                title={v.node.title}
                mainHeading={v.node.mainHeading}
                description={v.node.description}
                footerText={v.node.footerText}
                inverse={i % 2 !== 0}
              />
            </div>
          );
        })}
      </ProcedureContainer>

      <SectionFooter
        data={{ subTitle: 'Get In', title: 'Contact', link: '/contact-us' }}
        footerBg='bg-secondary'
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
    allContentfulSectionProcedures(sort: { fields: createdAt }) {
      edges {
        node {
          title
          mainHeading

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
