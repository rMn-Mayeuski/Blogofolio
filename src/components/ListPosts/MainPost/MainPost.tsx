import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./MainPost.module.scss"

interface MainPost {
    id: number,
    image: string,
    text: string,
    date: "2022-11-09",
    title: string,
}

const MainPost: React.FC<MainPost> = ({id, image, text, date, title}) => {
    return (
        <div className={styles.mainPostContent}>
            <div className={styles.mainPostContentTop}>
                <div className={styles.mainPostContentLeft}>
                    <p className={styles.date}>{date}</p>
                    <h2 className={styles.mainPostTitle}>{title}</h2>
                    <p className={styles.mainPostText}>{text}</p>
                </div>
                <div className={styles.mainPostContentRight}>
                    <img src={image} alt="img" />
                </div>
            </div>
            <ListPostsAction/>
        </div>
    );
};

export default MainPost;