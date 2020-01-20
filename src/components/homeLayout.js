import React from "react"

import MainMenu from './MainMenu'
import WelcomeBanner from './WelcomeBanner';
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

const HomeLayout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <WelcomeBanner />
    <LayoutWrap>
      {children}
    </LayoutWrap>
  </div>
);


export default HomeLayout;
