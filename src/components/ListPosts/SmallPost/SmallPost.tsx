import React, { FC } from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import { posts } from '../../../SharedLogic/ProjectDate';
import styles from "./SmallPost.module.scss"

const SmalPost: FC = () => {

    const blogPosts = posts.map((item) => {
        return (
        <div key={item.id} className={styles.smallPostContainer}>
            <div className={styles.smallPostContainerTop}>
                <div className={styles.smallPostContainerLeft}>
                    <p className={styles.date}>{item.date}</p>
                    <h3 className={styles.smallPostTitle}>{item.title}</h3>
                </div>
                <div className={styles.smallPostContainerRight}>
                    <img src={item.image} alt="img" />
                </div>
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

export default SmalPost;