import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, length, mediaQuery } from "../styles/GlobalStyle"
import { FaRegCalendarAlt } from "react-icons/fa"

import CoverImage from "./coverImage"

const Article = styled.article`
  position: relative;
  padding: 18px;
  display: flex;
  flex-direction: row;
  &:not(:first-of-type) {
    border-top: 2px solid ${colors.whiteDark};
  }
  ${({ isHidden }) =>
    isHidden &&
    `
    display: none;
  `}
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${colors.black};
  font-size: 1.1em;
  text-decoration: none;
  word-wrap: break-word;
  word-break: break-all;
  transition: 0.2s;
  &:hover {
    color: ${colors.link};
  }
`

const ImageBox = styled.div`
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  border-radius: ${length.radius};
  margin-right: ${length.marginSmall};
  @media screen and (min-width: ${mediaQuery.large}) {
    width: 86px;
    height: 86px;
  }
`
const Content = styled.div`
  flex-grow: 1;
  .cardtitle {
    font-size: 1.1em;
    margin: 0 0 0.4em 0;
  }
  .excerpt {
    font-size: 0.95em;
    line-height: 1.4;
    margin: 0 0 0.4em 0;
    word-wrap: break-word;
    word-break: break-all;
    color: ${colors.blackLight};
  }
  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    color: ${colors.grayLight};
    .postdate {
      display: flex;
      align-items: flex-start;
      .icon {
        margin-right: 10px;
      }
    }
    .category {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.5em;
        font-size: 14px;
      }
      .link {
        color: ${colors.grayLight};
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        padding: 4px 6px;
        border-radius: ${length.radiusSmall};
        border: 1px solid ${colors.main};
        transition: .2s;
        &:hover {
          color: ${colors.white};
          border: 1px solid ${colors.mainLight};
          background-color: ${colors.mainLight};
        }
      }
    }
  }
`

export default props => {
  return (
    <Article isHidden={props.isHidden}>
      <ImageBox>
        <CoverImage dirname={props.dirname} />
      </ImageBox>
      <Content>
        <h2 className={"cardtitle"}>
          <StyledLink to={props.slug}>{props.title}</StyledLink>
        </h2>
        <p className={"excerpt"}>{props.excerpt}</p>
        <div className={"info"}>
          <div className={"postdate"}>
            <FaRegCalendarAlt className={"icon"} />
            <time>{props.date}</time>
          </div>
          <div className={"category"}>
            <span>カテゴリー</span>
            <Link className={"link"} to={`/categories/${props.category}/`}>
              {props.category}
            </Link>
          </div>
        </div>
      </Content>
    </Article>
  )
}
