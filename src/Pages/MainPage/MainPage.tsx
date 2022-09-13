import React from 'react';
import ListPosts from '../../components/ListPosts/ListPosts';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';

const MainPage: React.FC = () => {
    return (
        <main>
            <Title title='Blog'/>
            <Tabs/>
            <ListPosts/>
        </main>
    );
};

export default MainPage;