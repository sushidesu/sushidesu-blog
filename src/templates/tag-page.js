import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import TagTitle from "../components/tagtitle"

export default ({ data, pageContext }) => {
  const tagName = pageContext.slug
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title={`tag: ${tagName}`} />
      <TagTitle type={"tag"} title={tagName} count={posts.length} />
      {posts.map(({ node }) => {
        return (
          <Card
            key={node.id}
            slug={`/${node.frontmatter.slug}/`}
            title={node.frontmatter.title}
            image={node.frontmatter.image}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
            category={node.frontmatter.categories[0]}
          />
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$slug] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          excerpt(truncate: true, pruneLength: 64)
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            categories
            slug
            excerpt
          }
        }
      }
    }
  }
`
