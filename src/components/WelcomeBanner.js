import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
// Requires react-responsive-carousel from npm
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import styled from 'styled-components';

const MainImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
`;

const WelcomeBanner = () => (
    /* Requires media library categories plugin */
    <StaticQuery query={graphql`
        {
            allWordpressWpMedia(filter: {categories: {elemMatch: {name: {eq: "Carousel"}}}}) {
                edges {
                  node {
                    media_type
                    path
                    source_url
                    caption
                    categories {
                      name
                    }
                  }
                }
              }
        }
    `} render={props => (
            <Carousel autoPlay={true} showThumbs={false} showIndicators={false} showStatus={false}>
                {props.allWordpressWpMedia.edges.map(elem => (
                    <div>
                        <MainImage src={elem.node.source_url} alt={elem.node.media_type} />
                    </div>
                ))}
            </Carousel>
    )} />
);

export default WelcomeBanner;