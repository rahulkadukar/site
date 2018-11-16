const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve(`./src/templates/tags.js`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }, index) => {
        const prevLink = index === 0 ? 'false' : posts[index - 1]['node'].fields.slug
        const nextLink = index === posts.length - 1 ? 'false' : posts[index + 1]['node'].fields.slug
        const prev = index === 0 ? 'false' : posts[index - 1]['node'].frontmatter.title.replace(/^./, str => str.toUpperCase())
        const next = index === posts.length - 1 ? 'false' : posts[index + 1]['node'].frontmatter.title.replace(/^./, str => str.toUpperCase())

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            prevLink: prevLink,
            nextLink: nextLink,
            prev, prev,
            next, next,
            slug: node.fields.slug,
          },
        })
      })

      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }      
      })
      // Eliminate duplicate tags
      tags = _.uniq(tags)

      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      })

      resolve()
    })
  })
}