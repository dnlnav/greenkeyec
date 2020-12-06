import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import moduleMapping from '../utils/moduleMapping';

const Home = () => {
  const {
    contentfulPagina: {
      modules: contentModules,
      logo: {
        fluid: { src: logo },
      },
      footer,
    },
  } = useStaticQuery(graphql`
    query {
      contentfulPagina {
        name
        modules {
          ... on ContentfulHomeBanner {
            title
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
          }
          ... on ContentfulOportunidadesYBeneficios {
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
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
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
          fluid(maxHeight: 52) {
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
      <Navbar logo={logo} />
      {modules.map(([Module, moduleConfig]) => (
        <Module key={moduleConfig.id} {...moduleConfig} />
      ))}
      <Footer logo={logo} {...footer} />
    </Layout>
  );
};

export default Home;
