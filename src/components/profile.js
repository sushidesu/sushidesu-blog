import React from "react"
import styled from "styled-components"
import { FiTwitter, FiGithub, FiSearch } from "react-icons/fi"
import { colors } from "../styles/GlobalStyle"

const Icon = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${colors.main};
`

const ProfileCard = styled.div`
  .card {
    display: flex;
    align-items: center;
  }

  .body {
    margin: 0.8em 0;
  }

  .namearea {
    margin: 0 0.8em;
    .name {
      font-size: 1em;
      font-weight: normal;
      margin: 0 0 0.1em 0;
    }
    .id {
      font-size: 0.9em;
      color: ${colors.blackLight};
    }
  }
`

const Links = styled.div`
  display: flex;
  .medialink {
    padding: 4px;
    margin: 0 4px;
    display: flex;
    justify-content: center; 
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  }
  .icon {
    margin: 2px 0 0 0;
    font-size: 1em;
    transition: .2s;
    &.twitter {
      color: #65c7d8;
    }
    &.github {
      margin-right: -2px;
      color: #333;
    }
    &.mail {
      color: #ff6f63;
    }
    &.qiita {
      margin-right: -2px;
      color: #4da201;
    }
  }

  span {
    margin-left: 4px;
    font-size: 1em;
    color: #666;
    transition: .2s;
  }

  .medialink:hover { 
    & span {
      color: ${colors.link}
    }
    & .icon {
      color: ${colors.link}
    }
  }
`

export default () => (
  <div>
    <ProfileCard>
      <div className={"card"}>
        <Icon />
        <div className={"namearea"}>
          <h3 className={"name"}>すし職人</h3>
          <span className={"id"}>@sushidesu</span>
        </div>
      </div>
      <p className={"body"}>雑貨屋さんでアルバイトをしています。</p>
    </ProfileCard>
    <Links>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_sushidesu" className={"medialink"}>
        <FiTwitter className={"icon twitter"} />
        <span>twitter</span>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/sushi-desu" className={"medialink"}>
        <FiGithub className={"icon github"} />
        <span>github</span>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://qiita.com/sushidesu" className={"medialink"}>
        <FiSearch className={"icon qiita"} />
        <span>qiita</span>
      </a>
    </Links>
  </div>
)
