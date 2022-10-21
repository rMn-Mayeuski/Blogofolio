import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IPost } from '../../../components/ListPosts/RenderPostCard/RenderPostCard';
import { updateCardAction } from '../../../SharedLogic/SelectedCardReducer';
import styles from "./ContentPageActions.module.scss"

interface AllActionsProps {
    post: IPost
}

const ContentPageActions: FC<AllActionsProps> = ({post}) => {

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

    const test = () => { console.log("123");
    
    }

    return (
        <div className={styles.actionsContainer}>
            <div className={styles.actionsContainerLeft}>
                <button 
                type='button' 
                className={styles.actionsContainerBTN} 
                onClick={handleLikePost}>
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.292 19.65C18.218 20.136 17.794 20.5 17.292 20.5H17.28H7V10.712L10.608 2.594C11.415 2.852 12 3.608 12 4.5V8.5C12 9.052 12.447 9.5 13 9.5H18.674C18.728 9.502 18.78 9.503 18.832 9.511C19.097 9.551 19.33 9.692 19.488 9.907C19.646 10.122 19.712 10.385 19.672 10.648L18.292 19.65ZM5 20.5H3C2.449 20.5 2 20.051 2 19.5V12.5C2 11.948 2.449 11.5 3 11.5H5V20.5ZM21.099 8.72C20.623 8.075 19.925 7.654 19.132 7.533C18.972 7.509 18.814 7.504 18.66 7.5H14V4.5C14 2.294 12.206 0.5 10 0.5C9.605 0.5 9.247 0.733 9.086 1.093L5.35 9.5H3C1.346 9.5 0 10.845 0 12.5V19.5C0 21.154 1.346 22.5 3 22.5H17.269H17.304C18.776 22.5 20.048 21.409 20.269 19.951L21.648 10.95C21.77 10.157 21.574 9.366 21.099 8.72Z" fill="#313037"/>
                    </svg>
                </button>
                <button 
                type='button' 
                className={`${post.dislike ? styles.activeDislike : ""} ${styles.actionsContainerBTNDislike}`}
                onClick={handleDislikePost}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.3665 10.424C20.2535 11.052 19.6965 11.513 19.0365 11.501H17.3665V2.501H19.0545C19.6965 2.452 20.2525 2.948 20.3665 3.577V10.424ZM15.3665 12.288L11.7585 20.406C10.9515 20.148 10.3665 19.391 10.3665 18.501V14.501C10.3665 13.948 9.91853 13.501 9.36653 13.501H3.69753C3.65153 13.498 3.59053 13.499 3.53353 13.49C2.98853 13.407 2.61253 12.896 2.69453 12.352L4.07553 3.351C4.14953 2.861 4.60153 2.522 5.08653 2.501H15.3665V12.288ZM22.3575 3.366C22.1355 1.723 20.7305 0.5 19.0945 0.5C19.0755 0.5 19.0555 0.5 19.0365 0.501H5.09753C3.61053 0.511 2.32053 1.581 2.09853 3.049L0.717531 12.051C0.470531 13.686 1.59853 15.218 3.23053 15.466C3.39053 15.491 3.55353 15.503 3.70653 15.501H8.36653V18.501C8.36653 20.707 10.1605 22.501 12.3665 22.501C12.7625 22.501 13.1195 22.268 13.2805 21.907L17.0155 13.501H19.0185C20.6885 13.506 22.1325 12.298 22.3575 10.635C22.3635 10.591 22.3665 10.546 22.3665 10.501V3.501C22.3665 3.456 22.3635 3.411 22.3575 3.366Z" fill="#313037"/>
                    </svg>
                </button>
            </div>
            <div className={styles.actionsContainerRight}>
                <button 
                type='button' 
                className={`${post.favorite ? styles.active : ""} ${styles.actionsContainerBTN}`}
                onClick={handleAddToFavoritePost}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z" fill="#313037"/>
                    </svg>
                    Add to favorites
                </button>
            </div>
        </div>
    );
};

export default ContentPageActions;