import React from 'react';
import Navbar from '../components/App/Navbar';
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';

import MainBanner from '../components/DataAnalyticsAIStartup/MainBanner';
import FeaturedService from '../components/DataAnalyticsAIStartup/FeaturedService';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import WeServe from '../components/BigDataAnalysisStartup/WeServe';
import OurMission from '../components/DataAnalyticsAIStartup/OurMission';
import Funfacts from '../components/DataAnalyticsAIStartup/Funfacts';
import HowItWork from '../components/DataAnalyticsAIStartup/HowItWork';
import StartProject from '../components/DataAnalyticsAIStartup/StartProject';

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <FeaturedService />
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
