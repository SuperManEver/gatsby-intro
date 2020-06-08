const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'FEM Workshop',
    description: 'Awesome course',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        // pages: path.join(__dirname, 'src/pages'),
      },
    },
  ],
}
