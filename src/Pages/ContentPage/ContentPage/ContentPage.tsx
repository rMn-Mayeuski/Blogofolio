import React, { FC, useEffect } from 'react';
import Title from '../../../components/Title/Title';
import styles from "./ContentPage.module.scss"
import {IPost} from "../../../components/ListPosts/RenderPostCard/RenderPostCard";
import { NavLink, useParams } from 'react-router-dom';
import PostActions, { ActionsVariants } from '../../../components/PostActions/PostActions';
import { useDispatch, useSelector } from 'react-redux';
import { handlePosts } from '../../../SharedLogic/asuncActions/PostActions';
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';

export interface ContentPageProps {
    post: IPost;
}

const ContentPage: FC<ContentPageProps> = ({post}) => {
    const dispatch = useDispatch();

    const { id = 1 } = useParams()

    const handleCardSelect = () => {
        dispatch(selectCardAction(post))
    }

    const {cards} = useSelector((state:any) => state.selectedCard)

    const selectedPost = cards.find((post: IPost) => post.id === +id);

    const getCards = async () => {
        await dispatch(handlePosts())
    }

    useEffect(() => {
        if (!cards.length) {
            getCards()
        }
    }, [])

    return (
                <div className={styles.contentPageContainer}>
                    <div className={styles.contentPageNav}>
                        <NavLink to="/home">Home</NavLink>
                        <span></span>
                        <p>Post {post.id}</p>
                    </div>
                    <Title title={post.title}/>
                    <img className={styles.contentPageImg} src={post.image} alt="PostContentIMG" />
                    <div className={styles.contentPageTextContainer}>
                        <p className={styles.contentPageText}>
                            {post.text}
                        </p>
                        {selectedPost 
                            ?
                        <PostActions variant={ActionsVariants.forContent} post={selectedPost} onClick={handleCardSelect}/>
                            : 
                        <PostActions variant={ActionsVariants.forContent} post={post} onClick={handleCardSelect}/>
                        }
                        {/* <PostActions variant={ActionsVariants.forContent} post={post} onClick={handleCardSelect}/> */}
                    </div>
                </div>
    );
};

export default ContentPage;