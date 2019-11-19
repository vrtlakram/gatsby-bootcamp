const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
    return graphql(`
      query {
        allMarkdownRemark{
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create blog post pages.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `/blog/${edge.node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: edge.node.fields.slug
          },
        })
      })
    })
  }