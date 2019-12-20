import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ filename }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
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
    node.relativePath.includes(filename)
  )
  if (image) {
    return <Img sizes={image.node.childImageSharp.sizes} />
  } else {
    return null
  }
}
