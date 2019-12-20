import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { LoadMore } from "../components/modules"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const postsperpage = 6
  const [current, setCurrent] = useState(postsperpage)

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(({ node }, i) => {
        return (
          <Card
            key={node.id}
            isHidden={i >= current}
            slug={`/${node.frontmatter.slug}/`}
            dirname={node.fields.slug}
            title={node.frontmatter.title}
            image={node.frontmatter.image}
            excerpt={node.excerpt}
            date={node.frontmatter.date}
            category={node.frontmatter.categories[0]}
          />
        )
      })}
      {postsperpage < posts.length && current < posts.length && (
        <LoadMore
          isLast={false}
          onclick={() => {
            setCurrent(current + postsperpage)
          }}
        />
      )}
      {postsperpage < posts.length && posts.length <= current && (
        <LoadMore isLast={true} />
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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

export default IndexPage
