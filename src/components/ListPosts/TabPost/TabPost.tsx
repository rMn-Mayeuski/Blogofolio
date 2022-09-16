import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./TabPost.module.scss"
import {IPost} from "../Test";

const TabPost: React.FC<IPost> = ({image, title, date, id}) => {    
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