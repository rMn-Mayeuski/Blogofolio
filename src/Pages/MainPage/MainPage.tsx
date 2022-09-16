import React from 'react';
import ListPosts from '../../components/ListPosts/ListPosts';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import data from "../../SharedLogic/ProjectDate.json";
import "../../mixin.scss";

const MainPage: React.FC = () => {

    const {results: posts} = data;

    return (
        <main className='main-info'>
            <div className="wrapper">
                <Title title='Blog'/>
                <Tabs/>
                <ListPosts postsConfig={posts}/>
            </div>
        </main>
    );
};

export default MainPage;