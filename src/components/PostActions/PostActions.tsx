import React, {FC} from 'react';

import {useDispatch} from "react-redux";
import { IPost } from '../ListPosts/RenderPostCard/RenderPostCard';
import { updateCardAction } from '../../SharedLogic/reducers/SelectedCardReducer';
import ActionItem from './ActionItem/ActionItem';
import styles from "./PostAction.module.scss";

export enum ActionsVariants  {
    forContent = "forContent",
    forCards = "forCards"
}
interface IActionsProps {
    post: IPost,
    variant?: ActionsVariants,
    className?: string,
    onClick?: any,
}

const PostActions: FC<IActionsProps> = ({post, variant, onClick}) => {
    const dispatch = useDispatch();

    const handleLikePost = () => {
        dispatch(updateCardAction({...post, like: !post.like, dislike: !post.dislike && post.dislike, likes: 1, dislikes: ""}));
    }

    const handleDislikePost = () => {
        dispatch(updateCardAction({...post, dislike: !post.dislike, like: !post.like && post.like, dislikes: 1, likes: ""}));
    }

    const handleAddToFavoritePost = () => {
        dispatch(updateCardAction({...post, favorite: !post.favorite}));
    }

    return (
        <div className={styles.wrapper}>
            
            {variant === ActionsVariants.forCards 

                ?

            <div className={styles.actionConteiner}>
                <div className={styles.actionConteinerLeft}>
                    <div className={styles.actionConteinerLeftLike}>
                        <ActionItem 
                            className={styles.btn} 
                            onClick={handleLikePost}
                        >
                            <svg  width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.292 19.15C18.218 19.636 17.794 20 17.292 20H17.28H7V10.212L10.608 2.094C11.415 2.352 12 3.108 12 4V8C12 8.552 12.447 9 13 9H18.674C18.728 9.002 18.78 9.003 18.832 9.011C19.097 9.051 19.33 9.192 19.488 9.407C19.646 9.622 19.712 9.885 19.672 10.148L18.292 19.15ZM5 20H3C2.449 20 2 19.551 2 19V12C2 11.448 2.449 11 3 11H5V20ZM21.099 8.22C20.623 7.575 19.925 7.154 19.132 7.033C18.972 7.009 18.814 7.004 18.66 7H14V4C14 1.794 12.206 0 10 0C9.605 0 9.247 0.233 9.086 0.593L5.35 9H3C1.346 9 0 10.345 0 12V19C0 20.654 1.346 22 3 22H17.269H17.304C18.776 22 20.048 20.909 20.269 19.451L21.648 10.45C21.77 9.657 21.574 8.866 21.099 8.22Z" />
                            </svg>
                        </ActionItem>
                        <p className={styles.actionConteinerLeftCounter}>
                            {post.likes}
                        </p>
                    </div>
                    <div className={styles.actionConteinerLeftDislike}>
                        <ActionItem 
                            className={styles.btn} 
                            onClick={handleDislikePost}
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6829 9.924C19.5699 10.552 19.0129 11.013 18.3529 11.001H16.6829V2.001H18.3709C19.0129 1.952 19.5689 2.448 19.6829 3.077V9.924ZM14.6829 11.788L11.0749 19.906C10.2679 19.648 9.68294 18.891 9.68294 18.001V14.001C9.68294 13.448 9.23494 13.001 8.68294 13.001H3.01394C2.96794 12.998 2.90694 12.999 2.84994 12.99C2.30494 12.907 1.92894 12.396 2.01094 11.852L3.39194 2.851C3.46594 2.361 3.91794 2.022 4.40294 2.001H14.6829V11.788ZM21.6739 2.866C21.4519 1.223 20.0469 0 18.4109 0C18.3919 0 18.3719 0 18.3529 0.001H4.41394C2.92694 0.011 1.63694 1.081 1.41494 2.549L0.0339373 11.551C-0.213063 13.186 0.914937 14.718 2.54694 14.966C2.70694 14.991 2.86994 15.003 3.02294 15.001H7.68294V18.001C7.68294 20.207 9.47694 22.001 11.6829 22.001C12.0789 22.001 12.4359 21.768 12.5969 21.407L16.3319 13.001H18.3349C20.0049 13.006 21.4489 11.798 21.6739 10.135C21.6799 10.091 21.6829 10.046 21.6829 10.001V3.001C21.6829 2.956 21.6799 2.911 21.6739 2.866Z" />
                            </svg>
                        </ActionItem>
                        <p className={styles.actionConteinerLeftCounter}>
                            {post.dislikes}
                        </p>
                    </div>
                </div>
                <div className={styles.actionConteinerRight}>
                    <ActionItem 
                        className={styles.btn} 
                        onClick={handleAddToFavoritePost}
                    >
                        {post.favorite 
                                ? 
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.btn}  d="M15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z"/>
                            </svg> 
                                : 
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z"/>
                            </svg>
                        }
                    </ActionItem>
                </div>
            </div> 

                :

                <div className={styles.contentPageActions}>
                    <div className={styles.contentPageActionsLeft}>
                        <ActionItem 
                            className={`${post.like ? styles.active : ""} ${styles.btnLikeContent}`} 
                            onClick={handleLikePost}
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svgSelectedContent} d="M18.292 19.15C18.218 19.636 17.794 20 17.292 20H17.28H7V10.212L10.608 2.094C11.415 2.352 12 3.108 12 4V8C12 8.552 12.447 9 13 9H18.674C18.728 9.002 18.78 9.003 18.832 9.011C19.097 9.051 19.33 9.192 19.488 9.407C19.646 9.622 19.712 9.885 19.672 10.148L18.292 19.15ZM5 20H3C2.449 20 2 19.551 2 19V12C2 11.448 2.449 11 3 11H5V20ZM21.099 8.22C20.623 7.575 19.925 7.154 19.132 7.033C18.972 7.009 18.814 7.004 18.66 7H14V4C14 1.794 12.206 0 10 0C9.605 0 9.247 0.233 9.086 0.593L5.35 9H3C1.346 9 0 10.345 0 12V19C0 20.654 1.346 22 3 22H17.269H17.304C18.776 22 20.048 20.909 20.269 19.451L21.648 10.45C21.77 9.657 21.574 8.866 21.099 8.22Z" />
                            </svg>
                        </ActionItem>
                        <ActionItem 
                            className={`${post.dislike ? styles.activeDislike : ""} ${styles.btnDislikeContent}`} 
                            onClick={handleDislikePost}
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svgSelectedContent} d="M19.6829 9.924C19.5699 10.552 19.0129 11.013 18.3529 11.001H16.6829V2.001H18.3709C19.0129 1.952 19.5689 2.448 19.6829 3.077V9.924ZM14.6829 11.788L11.0749 19.906C10.2679 19.648 9.68294 18.891 9.68294 18.001V14.001C9.68294 13.448 9.23494 13.001 8.68294 13.001H3.01394C2.96794 12.998 2.90694 12.999 2.84994 12.99C2.30494 12.907 1.92894 12.396 2.01094 11.852L3.39194 2.851C3.46594 2.361 3.91794 2.022 4.40294 2.001H14.6829V11.788ZM21.6739 2.866C21.4519 1.223 20.0469 0 18.4109 0C18.3919 0 18.3719 0 18.3529 0.001H4.41394C2.92694 0.011 1.63694 1.081 1.41494 2.549L0.0339373 11.551C-0.213063 13.186 0.914937 14.718 2.54694 14.966C2.70694 14.991 2.86994 15.003 3.02294 15.001H7.68294V18.001C7.68294 20.207 9.47694 22.001 11.6829 22.001C12.0789 22.001 12.4359 21.768 12.5969 21.407L16.3319 13.001H18.3349C20.0049 13.006 21.4489 11.798 21.6739 10.135C21.6799 10.091 21.6829 10.046 21.6829 10.001V3.001C21.6829 2.956 21.6799 2.911 21.6739 2.866Z" />
                            </svg>
                        </ActionItem>
                    </div>
                    <div className={styles.contentPageActionsRight}>
                        <ActionItem 
                            className={`${post.favorite ? styles.active : ""} ${styles.btnBookContent}`} 
                            onClick={handleAddToFavoritePost}
                            text="Add to favorites" 
                        >
                            <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
                                <path className={styles.svgSelectedContent} d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z"/>
                            </svg>
                        </ActionItem>
                    </div>
                </div>
            }
        </div>
    );
};

export default PostActions;