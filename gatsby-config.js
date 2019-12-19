module.exports = {
  siteMetadata: {
    title: "すしノート",
    description: "A blog powered by Gatsby`",
    author: "sushidesu",
    siteUrl: `https://note.sushidesu.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          {
            resolve: "gatsby-remark-images",
            options: {
              showCaptions: true,
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener",
              target: "_blank",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sushidesu-blog`,
        short_name: `sushinote`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
