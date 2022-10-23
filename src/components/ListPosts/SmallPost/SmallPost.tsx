import React, { FC } from 'react';
import styles from "./SmallPost.module.scss"
import {IPost} from "../RenderPostCard/RenderPostCard";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';
import img from "../../../img/TabPostIMG1.png";
import PostActions, { ActionsVariants } from '../../PostActions/PostActions';

const SmalPost: React.FC<IPost> = (props) => {

    const navigate = useNavigate()
    const handlePostPageOpen = () => navigate(`/contentpage/${props.id}`)

    const dispatch = useDispatch();
    const handleCardSelect = () => {
        dispatch(selectCardAction(props))
    }

    return (
        <div className={styles.smallPostContainer}>
            <div className={styles.smallPostContainerTop}>
                <div className={styles.smallPostContainerLeft} onClick={handlePostPageOpen}>
                    <p className={styles.date}>{props.date}</p>
                    <h3 className={styles.smallPostTitle}>{props.title}</h3>
                </div>
                <div className={styles.smallPostContainerRight} onClick={handleCardSelect}>
                    <img src={props.image} alt="img" />
                </div>
            </div>
            <PostActions variant={ActionsVariants.forCards} post={props}/>
        </div>
    );
};

export default SmalPost;