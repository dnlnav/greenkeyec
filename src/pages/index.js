import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import moduleMapping from '../utils/moduleMapping';

import MainBanner from '../components/DataAnalyticsAIStartup/MainBanner';
import FeaturedService from '../components/DataAnalyticsAIStartup/FeaturedService';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import WeServe from '../components/BigDataAnalysisStartup/WeServe';
import OurMission from '../components/DataAnalyticsAIStartup/OurMission';
import Funfacts from '../components/DataAnalyticsAIStartup/Funfacts';
import HowItWork from '../components/DataAnalyticsAIStartup/HowItWork';
import StartProject from '../components/DataAnalyticsAIStartup/StartProject';

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
              icon {
                fluid {
                  src
                }
              }
              description {
                json
              }
            }
          }
        }
      }
    }
  `);

  const modules = contentModules.map(moduleMapping);
  console.log({ modules });

  return (
    <Layout>
      <Navbar />
      {modules.map(([Module, moduleConfig]) => (
        <Module key={moduleConfig.id} {...moduleConfig} />
      ))}
      <AboutUsContent />
      <WeServe />
      <OurMission />
      <Funfacts />
      <HowItWork />
      <StartProject />
      <Footer />
    </Layout>
  );
};

export default Home;
