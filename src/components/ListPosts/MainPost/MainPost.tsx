import React from 'react';
import styles from "./MainPost.module.scss"
import {IPost} from "../RenderPostCard/RenderPostCard";

import { useNavigate } from 'react-router-dom';

import {useDispatch} from "react-redux";
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';
import img from "../../../img/MainPostIMG.png";
import PostActions, { ActionsVariants } from '../../PostActions/PostActions';

const MainPost:React.FC<IPost> = (props) => {    

    const navigate = useNavigate()
    const handlePostPageOpen = () => navigate(`/contentpage/${props.id}`)

    const dispatch = useDispatch();
    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div className={styles.mainPostContent}>
                <div className={styles.mainPostContentTop}>
                    <div className={styles.mainPostContentLeft} onClick={handlePostPageOpen}>
                        <p className={styles.date}>{props.date}</p>
                        <h2 className={styles.mainPostTitle}>{props.title}</h2>
                        <p className={styles.mainPostText}>{props.description}</p>
                    </div>
                    <div className={styles.mainPostContentRight} onClick={handleCardSelect}>
                        <img src={props.image} alt="img" />
                    </div>
                </div>
        <PostActions variant={ActionsVariants.forCards} post={props}/>
    </div>
    );
};

export default MainPost;