import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import moduleMapping from '../utils/moduleMapping';

const Home = () => {
  const {
    contentfulPagina: { modules: contentModules },
  } = useStaticQuery(graphql`
    query {
      contentfulPagina {
        name
        modules {
          ... on ContentfulHomeBanner {
            id
            title
            ctaLink
            ctaText
            sys {
              contentType {
                sys {
                  id
                }
              }
            }
          }
          ... on ContentfulServicios {
            id
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
            }
          }
        }
      }
    }
  `);
  
  console.log({ contentModules });
  
  const modules = contentModules.map(moduleMapping);
  console.log({ modules });
  
  return (
    <Layout>
      <Navbar />
      {modules.map(([Module, moduleConfig]) => (
        <Module key={moduleConfig.id} {...moduleConfig}/>
      ))}
      <Footer />
    </Layout>
  );
};

export default Home;
