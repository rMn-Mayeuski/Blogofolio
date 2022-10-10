import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./TabPost.module.scss"
import {IPost} from "../RenderPostCard/RenderPostCard";

import { useNavigate } from 'react-router-dom';

import {useDispatch} from "react-redux";
import { selectCardAction } from '../../../SharedLogic/SelectedCardReducer';

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
            <ListPostsAction/>
        </div>
    );
};

export default TabPost;