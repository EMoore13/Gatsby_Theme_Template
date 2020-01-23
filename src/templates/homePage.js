import React from 'react'
import HomeLayout from '../components/homeLayout';
import styled from 'styled-components';

const TitleText = styled.h1`
    color: #a63838;
    font-size: 30px;
    font-family: 'Yantramanav';
`;

const BodyText = styled.p`
    color: #343333;
    font-family: 'Overpass';
    font-size: 14px;
`;

export default ({pageContext}) => (
    <HomeLayout>
        <TitleText dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <BodyText dangerouslySetInnerHTML={{__html: pageContext.content}} />

        For reference this is a different template
    </HomeLayout>
);