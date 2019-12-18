import React from "react"
import styled from "styled-components"
import { colors } from "../styles/GlobalStyle"

export default () => {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <span>©</span>
      <span>{year}</span>
      <span>sushidesu.com</span>
    </Footer>
  )
}

const Footer = styled.footer`
  background-color: ${colors.white};
  color: ${colors.blackLight};
  padding: 20px;
  text-align: center;
  flex-grow: 1;
  span {
    display: inline-block;
    margin-right: 0.4em;
  }
`
