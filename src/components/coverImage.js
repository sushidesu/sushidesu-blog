import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { colors } from "../styles/GlobalStyle"

export default ({ dirname }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {name: {eq: "cover"}}) {
        edges {
          node {
            relativeDirectory
            name
            childImageSharp {
              sizes(maxWidth: 86) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)
  
  const image = data.images.edges.find(({ node }) =>
    `/${node.relativeDirectory}/` === dirname
  )
  if (image) {
    return <Img style={{
      borderRadius: "inherit"
    }} sizes={image.node.childImageSharp.sizes} />
  } else {
    return <div style={{
      width: "inherit",
      height: "inherit",
      borderRadius: "inherit",
      backgroundColor: colors.mainLight
    }}></div>
  }
}
