import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import moduleMapping from '../utils/moduleMapping';
import Head from 'next/head';
import { gql } from '@apollo/client';
import graphqlClient from '../utils/graphqlClient';

const Home = ({ contentModules, name, logo, favicon, footer }) => {
  const modules = contentModules.map(moduleMapping);

  return (
    <Layout>
      <Head>
        <title>{name}</title>
        <link rel="icon" type="image/png" href={favicon}></link>
      </Head>
      <Navbar logo={logo} />
      {modules.map(([Module, moduleConfig]) =>
        Module ? <Module key={moduleConfig.sys.id} {...moduleConfig} /> : null
      )}
      <Footer logo={logo} {...footer} />
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const {
    data: {
      page: {
        name,
        logo: { url: logo },
        favicon: { url: favicon },
        footer,
        modulesCollection: { items: contentModules },
      },
    },
  } = await graphqlClient.query({
    query: gql`
      {
        page(id: "${process.env.CONTENTFUL_HOMEPAGE_ID}") {
          name
          logo {
            url
          }
          favicon {
            url(
              transform: {
                width: 32
                height: 32
                resizeStrategy: FIT
                format: PNG
              }
            )
          }
          footer {
            ... on Footer {
              linkedInLink
              facebookLink
              instagramLink
              copyright {
                json
              }
              description {
                json
              }
              infoListCollection(limit: 20) {
                items {
                  nombre
                  link
                  iconName
                }
              }
            }
          }
          modulesCollection(limit: 20) {
            total
            items {
              __typename
              ... on HomeBanner {
                sys {
                  id
                }
                title
                linkId
                description {
                  json
                }
                ctaLink
                ctaText
                image {
                  url
                  title
                }
              }
              ... on AboutUs {
                sys {
                  id
                }
                linkId
                columnasCollection(limit: 20) {
                  items {
                    title
                    list
                    description {
                      json
                    }
                  }
                }
              }
              ... on Services {
                sys {
                  id
                }
                linkId
                cardsCollection(limit: 20) {
                  items {
                    ctaLink
                    ctaText
                    title
                    icon {
                      url(transform: { height: 52 })
                    }
                    description {
                      json
                    }
                  }
                }
              }
              ... on IndustriesWeServe {
                sys {
                  id
                }
                linkId
                title
                description {
                  json
                }
                itemListCollection(limit: 20) {
                  items {
                    iconName
                    nombre
                    link
                  }
                }
              }
              ... on Oportunities {
                sys {
                  id
                }
                linkId
                buttonLink
                buttonText
                image {
                  url
                }
                endDescription {
                  json
                }
                startDescription {
                  json
                }
                list
                title
              }
              ... on FunFacts {
                sys {
                  id
                }
                linkId
                title
                itemsCollection(limit: 20) {
                  items {
                    name
                    icon {
                      url
                    }
                    description
                  }
                }
              }
              ... on Methodology {
                sys {
                  id
                }
                linkId
                image {
                  title
                  url
                }
                description {
                  json
                }
                title
                itemsCollection(limit: 20) {
                  items {
                    name
                    description
                    icon {
                      url
                    }
                  }
                }
              }
              ... on ContactUs {
                sys {
                  id
                }
                linkId
                title
                description {
                  json
                }
                image {
                  url
                }
                button {
                  iconName
                  link
                  nombre
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      contentModules,
      name,
      logo,
      favicon,
      footer,
    },
  };
}
