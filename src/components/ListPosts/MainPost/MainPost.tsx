import React from 'react';
import { posts } from '../../../SharedLogic/ProjectDate';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./MainPost.module.scss"

// interface MainPost {
//     id: number,
//     image: string,
//     text: string,
//     date: "2022-11-09",
//     title: string,
// }

const MainPost:React.FC = () => {

    const blogPosts = posts.map((item) => {
        return (
            <div key={item.id} className={styles.mainPostContent}>
                <div className={styles.mainPostContentTop}>
                    <div className={styles.mainPostContentLeft}>
                        <p className={styles.date}>{item.date}</p>
                        <h2 className={styles.mainPostTitle}>{item.title}</h2>
                        <p className={styles.mainPostText}>{item.description}</p>
                    </div>
                <div className={styles.mainPostContentRight}>
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

export default MainPost;