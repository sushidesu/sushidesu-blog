const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              categories
              tags
              slug
              excerpt
            }
            fields {
              slug
            }
          }
        }
      }
      tagdata: allMarkdownRemark(limit: 20) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
      categorydata: allMarkdownRemark(limit: 20) {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-post pages
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: `/${post.node.frontmatter.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // create tag page
  const tags = result.data.tagdata.group
  const TagPage = path.resolve(`./src/templates/tag-page.js`)
  tags.forEach(({ tag }) => {
    createPage({
      path: `/tags/${tag}/`,
      component: TagPage,
      context: {
        slug: tag,
      },
    })
  })

  // create category page
  const categories = result.data.categorydata.group
  const CategoryPage = path.resolve(`./src/templates/category-page.js`)
  categories.forEach(({ category }) => {
    createPage({
      path: `/categories/${category}/`,
      component: CategoryPage,
      context: {
        slug: category,
      },
    })
  })
}

// slugの生成
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
