/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import MainMenu from './MainMenu'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const LayoutWrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrap>
      {children}
    </LayoutWrap>
  </div>
);


export default Layout;
