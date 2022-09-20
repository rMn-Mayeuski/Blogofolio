import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./MainPost.module.scss"
import {IPost} from "../Test";
import { NavLink } from 'react-router-dom';

interface MainPostNav {
    to: string;
}

const MainPost:React.FC<IPost & MainPostNav> = ({date, title, description, image, to}) => {    
    return (
        <div className={styles.mainPostContent}>
            <NavLink to={to}>
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
            </NavLink>
        <ListPostsAction/>
    </div>
    );
};

export default MainPost;