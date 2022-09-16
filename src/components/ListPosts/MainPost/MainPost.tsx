import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./MainPost.module.scss"
import {IPost} from "../Test";

const MainPost:React.FC<IPost> = ({date, title, description, image}) => {    
    return (
        <div className={styles.mainPostContent}>
            <div className={styles.mainPostContentTop}>
                <div className={styles.mainPostContentLeft}>
                    <p className={styles.date}>{date}</p>
                    <h2 className={styles.mainPostTitle}>{title}</h2>
                    <p className={styles.mainPostText}>{description}</p>
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