import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaRegSadTear } from "react-icons/fa"
import { colors, length } from "../../styles/GlobalStyle"

const Wrapper = styled.div`
  padding: 0;
  margin: 0 6px;
`

export const Tag = styled(props => <Link {...props} />)`
  display: inline-block;
  border: 1px solid ${colors.sub};
  margin: 3px;
  padding: 8px 10px;
  font-size: 1rem;
  border-radius: ${length.radiusSmall};
  text-decoration: none;
  color: ${colors.blackLight};
  transition: 0.14s;
  &:hover {
    border: 1px solid ${colors.subLight};
    background-color: ${colors.subLight};
    color: ${colors.white};
  }
`

const CategoryList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-top: ${length.marginSmall};
    &::before {
      content: "";
      background-color: ${colors.main};
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin: 2px ${length.marginSmall};
    }
    &:last-of-type {
      margin-bottom: ${length.marginSmall};
    }

    a {
      text-decoration: none;
      color: ${colors.black};
      transition: 0.2s;
      &:hover {
        color: ${colors.link};
      }
    }
  }
`

export const Tags = ({ tags }) => {
  return (
    <Wrapper>
      {tags.map(({ tag }, index) => (
        <Tag to={`/tags/${tag}/`} key={index}>
          {tag}
        </Tag>
      ))}
    </Wrapper>
  )
}

export const Categories = ({ categories }) => {
  return (
    <Wrapper>
      <CategoryList>
        {categories.map(({ category }, index) => (
          <li key={index}>
            <Link to={`/categories/${category}/`}>{category}</Link>
          </li>
        ))}
      </CategoryList>
    </Wrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${colors.whiteDark};
`

const LastDayo = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  span {
    color: ${colors.blackLight};
    font-size: 0.95em;
  }
  .icon {
    color: ${colors.blackLight};
    margin-left: 0.4em;
    font-size: 1.06em;
  }
`

const LoadDayo = styled.button`
  background-color: transparent;
  border: none;
  display: inline-block;
  padding: 16px;
  color: ${colors.black};
  font-size: 0.95em;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: ${colors.link};
  }
  &:focus {
    outline: none;
  }
`

export const LoadMore = ({ isLast, onclick }) => (
  <ButtonWrapper>
    {isLast ? (
      <LastDayo>
        <span>もうないよ</span>
        <FaRegSadTear className={"icon"} />
      </LastDayo>
    ) : (
      <LoadDayo onClick={onclick}>もっと見る</LoadDayo>
    )}
  </ButtonWrapper>
)
