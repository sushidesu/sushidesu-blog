import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Icon from "../static/sushino-to.svg"

const Header = () => (
  <Wrapper>
    <Link to="/">
      <Icon style={{ width: "200px", height: "66px" }} />
    </Link>
  </Wrapper>
)

const Wrapper = styled.header`
  margin-right: auto;
  margin-left: auto;
  max-width: 1160px;
  padding: 0;
  @media screen and (min-width: 768px) {
    padding: 0 16px;
  }
`

export default Header
