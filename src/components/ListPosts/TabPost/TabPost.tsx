import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./TabPost.module.scss"
import {IPost} from "../Test";
import { useNavigate } from 'react-router-dom';

const TabPost: React.FC<IPost> = ({
    id,
    date="April 20, 2021",
    title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk", 
    image="https://www.google.by/url?sa=i&url=https%3A%2F%2Fscienceandtech.ru%2Farticles%2Ffioletovyj-kosmos%2F&psig=AOvVaw15hNFOJR7Hhndl78m92Hoq&ust=1664965156838000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPi8-NysxvoCFQAAAAAdAAAAABAD", 
}) => {  
    
    const navigate = useNavigate()
    const handlePostPageOpen = () => navigate(`/contentpage/${id}`)

    return (
        <div  className={styles.tabPostContent}>
            <div className={styles.tabPostContentTop}>
                <img src={image} alt="img" />
                <div className={styles.tabPostContentText} onClick={handlePostPageOpen}>
                    <p className={styles.date}>{date}</p>
                    <h3 className={styles.tabPostTitle}>{title}</h3>
                </div>
            </div>
            <ListPostsAction/>
        </div>
    );
};

export default TabPost;