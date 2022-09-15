import React, { FC } from 'react';
import ListPosts from './ListPosts';
import {IPost} from "./ListPosts";
import "../../App.scss";
import styles from "./Test.module.scss";

export interface PostsListProps {
    posts: IPost[],
}

const Test: FC<PostsListProps> = ({ posts }) => {

    const getPostCardSize = (index: number) => {
        switch (index) {
            case 0:
                return "Main"
            case 1:
            case 2:
                return "Tab"
            case 3:
            case 4:
                return "Small"
            default:
                return "Main";
        }
    }

    return (
        <section className='list-post'>
            <div className='wrapper'>
                {posts.map((post, index) => <ListPosts {...post} key={post.id} size={getPostCardSize(index)} />)}
            </div>
        </section>
    );
};

export default Test;