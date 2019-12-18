import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tag } from "../components/modules"
import Paging from "../components/paging"
import { colors, mediaQuery } from "../styles/GlobalStyle"

const Wrapper = styled.div`
  padding: 0 1em;
  & > .date {
    color: ${colors.grayLight};
    margin: 16px 0 8px 0;
  }
  & > h1 {
    line-height: 1.4;
    word-wrap: break-word;
    margin: 20px 0 10px 0;
  }
  & > .tags {
    margin-bottom: 2em;
  }
  @media screen and (min-width: ${mediaQuery.small}) {
    padding: 0 2em;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Wrapper>
          <p className={"date"}>公開日 {post.frontmatter.date}</p>
          <h1>{post.frontmatter.title}</h1>
          <div className={"tags"}>
            {post.frontmatter.tags.map((tag, index) => (
              <Tag to={`/tags/${tag}/`} key={index}>
                {tag}
              </Tag>
            ))}
          </div>
          <div
            className={"markdown-body"}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <Paging prev={previous} next={next} />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(truncate: true, pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY年M月DD日")
        tags
      }
    }
  }
`
