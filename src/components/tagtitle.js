import React from "react"
import styled from "styled-components"
import { FaHashtag } from "react-icons/fa"
import { colors, length } from "../styles/GlobalStyle"

const typeofcolors = {
  tag: colors.subLight,
  category: colors.mainLight,
}

const Wrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  align-items: flex-end;

  h1 {
    margin: 0 0 0 ${length.marginSmall};
    color: ${colors.black};
    font-size: 1.6em;
    display: flex;
    align-items: center;
    .icon {
      color: ${({ pagetype }) => typeofcolors[pagetype]};
      margin-right: 5px;
    }
  }
  p {
    color: ${colors.blackLight};
    font-size: 1.1em;
    margin: 0 0 0 ${length.marginSmall};
  }
`

export default ({ type, title, count }) => (
  <Wrapper pagetype={type}>
    <h1>
      <FaHashtag className={"icon"} />
      {title}
    </h1>
    <p>{count}件</p>
  </Wrapper>
)
