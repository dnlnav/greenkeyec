import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import moduleMapping from '../utils/moduleMapping';
import { Helmet } from 'react-helmet';

const Home = () => {
  const {
    contentfulPagina: {
      modules: contentModules,
      logo: {
        fluid: { src: logo },
      },
      favicon: {
        fluid: { src: favicon },
      },
      footer,
      name,
    },
  } = useStaticQuery(graphql`
    query {
      contentfulPagina {
        name
        modules {
          ... on ContentfulHomeBanner {
            title
            linkId
            description {
              json
            }
            ctaLink
            ctaText
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            image {
              fluid {
                src
              }
              title
            }
          }
          ... on ContentfulServicios {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            cards {
              ctaLink
              ctaText
              title
              icon {
                fluid(maxHeight: 52) {
                  src
                }
              }
              description {
                json
              }
            }
          }
          ... on ContentfulQuienesSomos {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            columnas {
              description {
                json
              }
              title
              list
            }
          }
          ... on ContentfulAQuienesEstaDirigido {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            title
            description {
              json
            }
            itemList {
              iconName
              nombre
              link
            }
          }
          ... on ContentfulOportunidadesYBeneficios {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            buttonLink
            buttonText
            image {
              fluid {
                src
              }
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
          ... on ContentfulFunFacts {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            title
            items {
              name
              icon {
                fluid {
                  src
                }
              }
              description
            }
          }
          ... on ContentfulMetodologia {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            image {
              fluid {
                src
              }
            }
            description {
              json
            }
            title
            items {
              name
              description
              icon {
                fluid {
                  src
                }
              }
            }
          }
          ... on ContentfulContactanos {
            linkId
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
            title
            description {
              json
            }
            image {
              fluid {
                src
              }
            }
            button {
              iconName
              link
              nombre
            }
          }
        }
        logo {
          fluid(maxHeight: 100) {
            src
          }
        }
        favicon {
          fluid(toFormat: PNG, maxWidth: 32, maxHeight: 32) {
            src
          }
        }
        footer {
          linkedInLink
          instagramLink
          facebookLink
          copyright {
            json
          }
          description {
            json
          }
          infoList {
            nombre
            link
            iconName
          }
        }
      }
    }
  `);

  const modules = contentModules.map(moduleMapping);

  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
        <link rel="icon" type="image/png" href={favicon}></link>
      </Helmet>
      <Navbar logo={logo} />
      {modules.map(([Module, moduleConfig]) => (
        <Module key={moduleConfig.id} {...moduleConfig} />
      ))}
      <Footer logo={logo} {...footer} />
    </Layout>
  );
};

export default Home;
