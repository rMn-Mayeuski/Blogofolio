import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./TabPost.module.scss"
import {IPost, PostProps} from "../ListPosts";

const TabPost: React.FC<IPost & PostProps> = ({image, description, title, date, id, size}) => {    
    return (
        <div  className={styles.tabPostContent}>
            <div className={styles.tabPostContentTop}>
                <img src={image} alt="img" />
                <p className={styles.date}>{date}</p>
                <h3 className={styles.tabPostTitle}>{title}</h3>
            </div>
            <ListPostsAction/>
        </div>
    );
};

export default TabPost;