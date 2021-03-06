import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import theme from "../theming/theme"
import AppFunctionComponent from "../types/app-function-component.interface"
import Footer from "./base/footer/footer.component"
import Header from "./base/header/header.component"
import GlobalStyle from "./global-style.component"

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Layout: AppFunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Normalize />
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default Layout
