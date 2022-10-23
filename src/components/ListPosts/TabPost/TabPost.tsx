import React from 'react';
import styles from "./TabPost.module.scss"
import {IPost} from "../RenderPostCard/RenderPostCard";

import { useNavigate } from 'react-router-dom';

import {useDispatch} from "react-redux";
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';
import img from "../../../img/TabPostIMG4.png";
import PostActions, { ActionsVariants } from '../../PostActions/PostActions';

const TabPost: React.FC<IPost> = (props) => {  
    
    const navigate = useNavigate()
    const handlePostPageOpen = () => navigate(`/contentpage/${props.id}`)

    const dispatch = useDispatch();
    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div  className={styles.tabPostContent}>
            <div className={styles.tabPostContentTop}>
                <img src={props.image} alt="img" onClick={handleCardSelect}/>
                <div className={styles.tabPostContentText} onClick={handlePostPageOpen}>
                    <p className={styles.date}>{props.date}</p>
                    <h3 className={styles.tabPostTitle}>{props.title}</h3>
                </div>
            </div>
            <PostActions variant={ActionsVariants.forCards} post={props}/>
        </div>
    );
};

export default TabPost;