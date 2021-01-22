import MainBanner from '../components/DataAnalyticsAIStartup/MainBanner';
import FeaturedService from '../components/DataAnalyticsAIStartup/FeaturedService';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import WeServe from '../components/BigDataAnalysisStartup/WeServe';
import OurMission from '../components/DataAnalyticsAIStartup/OurMission';
import Funfacts from '../components/DataAnalyticsAIStartup/Funfacts';
import HowItWork from '../components/DataAnalyticsAIStartup/HowItWork';
import StartProject from '../components/DataAnalyticsAIStartup/StartProject';

const MODULE_MAPPING = {
  HomeBanner: MainBanner,
  Services: FeaturedService,
  AboutUs: AboutUsContent,
  IndustriesWeServe: WeServe,
  Oportunities: OurMission,
  FunFacts: Funfacts,
  Methodology: HowItWork,
  ContactUs: StartProject,
};

const moduleMapping = (module) => {
  const { __typename: moduleName } = module;

  return [MODULE_MAPPING[moduleName], module];
};

export default moduleMapping;
