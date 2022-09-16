import React, { FC } from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./SmallPost.module.scss"
import {IPost} from "../Test";

const SmalPost: React.FC<IPost> = ({image, title, date, id}) => {
    return (
        <div className={styles.smallPostContainer}>
            <div className={styles.smallPostContainerTop}>
                <div className={styles.smallPostContainerLeft}>
                    <p className={styles.date}>{date}</p>
                    <h3 className={styles.smallPostTitle}>{title}</h3>
                </div>
                <div className={styles.smallPostContainerRight}>
                    <img src={image} alt="img" />
                </div>
            </div>
            <ListPostsAction/>
        </div>
    );
};

export default SmalPost;