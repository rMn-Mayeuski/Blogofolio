import React from 'react';
import { posts } from '../../../SharedLogic/ProjectDate';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./TabPost.module.scss"

const TabPost: React.FC = () => {

    const blogPosts = posts.map((item) => {
        return (
            <div key={item.id} className={styles.tabPostContent}>
            <div className={styles.tabPostContentTop}>
                <img src={item.image} alt="img" />
                <p className={styles.date}>{item.date}</p>
                <h3 className={styles.tabPostTitle}>{item.title}</h3>
            </div>
            <ListPostsAction/>
        </div>
        )
    })

    return (
        <>
            {blogPosts}
        </>
    );
};

export default TabPost;