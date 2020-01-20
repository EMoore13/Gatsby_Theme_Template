import React from 'react'
import HomeLayout from '../components/homeLayout';

export default ({pageContext}) => (
    <HomeLayout>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />

        For reference this is a different template
    </HomeLayout>
);