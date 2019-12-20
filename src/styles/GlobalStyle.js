 import { css, createGlobalStyle } from "styled-components"

// color settings
export const colors = {}

colors.white = "#ffffff"
colors.whiteDark = "#f1f3f3"

colors.black = "#000000"
colors.blackLight = "#777777"

colors.gray = "#787c7b"
colors.grayLight = "#a8abb1"

colors.main = "#51cdc2"
colors.mainLight = "#a6e3d7"

colors.sub = "#ffba49"
colors.subLight = "#ffe092"

colors.link = "#12a4a7"

// length
export const length = {}

length.radius = "6px"
length.radiusSmall = "4px"

length.marginSmall = "10px"
length.marginMedium = "40px"
length.marginLarge = "100px"

// mediaquery
export const mediaQuery = {}

mediaQuery.small = "768px"
mediaQuery.medium = ""
mediaQuery.large = "1024px"

const font = css`
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3",
    Meiryo, 'メイリオ', "Noto Sans Japanese", sans-serif;
  color: ${colors.black};
`

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    ${font}
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.white};
  }
`

export default GlobalStyle
