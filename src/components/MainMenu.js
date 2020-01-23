import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import SiteInfo from './SiteInfo';

const NavContainer = styled.div`
    position: static;
    width: 100%;
    display: flex;
    background-color: #461220;
`;

const MainInner = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
`;

const StyledLink = styled(Link)`
    padding: 24px 16px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    transition: 0.2s ease;

    &:hover {
        color: #88b660;
    }
`;

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {
            name: {
                eq: "Main Menu"
            }
        }) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props => (
            <NavContainer>
                <MainInner>
                    <SiteInfo />
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                        <StyledLink to={item.object_slug} key={item.title}>
                            {item.title}
                        </StyledLink>
                    ))}
                </MainInner>
            </NavContainer>
        )} />
);

export default MainMenu;