import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { colors, length } from "../styles/GlobalStyle"

import { Categories, Tags } from "./modules"

const SideMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      tags: allMarkdownRemark(limit: 20) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
      categories: allMarkdownRemark(limit: 20) {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = data.categories.group.sort(
    (a, b) => b.totalCount - a.totalCount
  )
  const tags = data.tags.group.sort((a, b) => b.totalCount - a.totalCount)

  return (
    <Aside>
      <div className={"wrapper"}>
        <h3>カテゴリー</h3>
        <Categories categories={categories} />
      </div>
      <div className={"wrapper"}>
        <h3>タグ</h3>
        <Tags tags={tags} />
      </div>
    </Aside>
  )
}

const Aside = styled.aside`
  margin-top: ${length.marginSmall};

  .wrapper {
    padding: 20px;
    &:not(:first-of-type) {
      border-top: 2px solid ${colors.whiteDark};
    }

    h3 {
      margin: 0 0 16px 0;
    }
  }
`

export default SideMenu
