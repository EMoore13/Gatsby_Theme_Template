import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: white;
    display: flex;
    align-items: center;
`;

const TitleStyle = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;
    color: white;
    font-family: 'Yantramanav';
    font-size: 30px;
    margin-right: 10px;
`;

const DescStyle = styled.h6`
    font-size: 14px;
    font-style: italic;
    margin: 0;
    font-weight: normal;
`;

const SiteInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
      
    `} render={props => (
        <SiteInfoWrapper>
            <TitleStyle to={'/home'}>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </TitleStyle>
            <DescStyle>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </DescStyle>
        </SiteInfoWrapper>
    )} />
);

export default SiteInfo;