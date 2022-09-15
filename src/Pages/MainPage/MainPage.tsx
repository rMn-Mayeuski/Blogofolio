import React from 'react';
import ListPosts from '../../components/ListPosts/ListPosts';
import Test from '../../components/ListPosts/Test';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import data from "../../SharedLogic/ProjectDate.json";

const MainPage: React.FC = () => {

    const {results: posts} = data;

    return (
        <main className='main'>
            <Title title='Blog'/>
            <Tabs/>
            <Test posts={posts}/>
        </main>
    );
};

export default MainPage;