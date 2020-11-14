require('dotenv').config({
  path: '.env',
});
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 * All configuration related things are here
 *
 * This is configuration file
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `seut6m50hfii`,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
  ],
};
