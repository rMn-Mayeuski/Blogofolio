import React, { FC } from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./SmallPost.module.scss"
import {IPost} from "../Test";

const SmalPost: React.FC<IPost> = ({
    id,
    date="April 20, 2021",
    title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk",  
    image="https://www.google.by/url?sa=i&url=https%3A%2F%2Fscienceandtech.ru%2Farticles%2Ffioletovyj-kosmos%2F&psig=AOvVaw15hNFOJR7Hhndl78m92Hoq&ust=1664965156838000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPi8-NysxvoCFQAAAAAdAAAAABAD", 
}) => {
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