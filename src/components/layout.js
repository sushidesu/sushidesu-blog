import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import SideMenu from "./sideMenu"
import Foooter from "./foooter"
import GlobalStyle, { colors, length, mediaQuery } from "../styles/GlobalStyle"

const Container = styled.div`
  display: flex;
  margin: 0;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${colors.whiteDark};

  .header {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: ${colors.main};
    height: 66px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${length.marginMedium};
  }

  .main {
    width: 100%;
    height: 100%;
    max-width: 900px;
    background-color: ${colors.white};
    border-radius: ${length.radius};
  }

  .side {
    width: 100%;
    max-width: 900px;
    height: fit-content;
    margin-top: ${length.marginMedium};
    background-color: ${colors.white};
    border-radius: ${length.radius};
  }

  .footer {
    margin-top: ${length.marginMedium};
    flex: 1;
    display: flex;
    align-items: flex-end;
  }

  @media screen and (min-width: ${mediaQuery.small}) {
    .content {
      margin-left: ${length.marginSmall};
      margin-right: ${length.marginSmall};
    }
  }
  @media screen and (min-width: ${mediaQuery.large}) {
    .content {
      flex-wrap: nowrap;
    }
    .main {
      width: 800px;
      margin-right: ${length.marginSmall};
    }
    .side {
      width: 330px;
      min-width: 330px;
      margin: 0;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <div className={"header"}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

      <div className={"content"}>
        <div className={"main"}>
          <main>{children}</main>
        </div>
        <div className={"side"}>
          <SideMenu />
        </div>
      </div>

      <div className={"footer"}>
        <Foooter />
      </div>

      <GlobalStyle />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
