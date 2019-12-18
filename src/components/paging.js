import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../styles/GlobalStyle"

const Paging = ({ prev, next }) => {
  return (
    <Wrapper>
      <PagingItem className={"left"}>
        {prev && (
          <StyledLink to={`/${prev.frontmatter.slug}/`}>
            {prev.frontmatter.title}
          </StyledLink>
        )}
      </PagingItem>
      <PagingItem className={"right"}>
        {next && (
          <StyledLink to={`/${next.frontmatter.slug}/`}>
            {next.frontmatter.title}
          </StyledLink>
        )}
      </PagingItem>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 4em;
  border-top: 2px solid ${colors.whiteDark};
  height: 86px;
  display: flex;
  align-items: center;
`
const PagingItem = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  &.left {
    margin: 0 0.5em 0 1em;
    justify-content: flex-start;
    text-align: left;
    a::before {
      content: "<";
      position: absolute;
      left: -1.2em;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.right {
    margin: 0 1em 0 0.5em;
    justify-content: flex-end;
    text-align: right;
    a::after {
      content: ">";
      position: absolute;
      right: -1.2em;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${colors.blackLight};
  line-height: 1.5;
  font-size: 0.9em;
`

export default Paging
