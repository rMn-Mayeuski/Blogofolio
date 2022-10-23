import React, { FC } from 'react';
import Title from '../../components/Title/Title';
import styles from "./ContentPage.module.scss"
import {IPost} from "../../components/ListPosts/RenderPostCard/RenderPostCard";
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectImgAction } from '../../SharedLogic/reducers/SelectedCardReducer';
import PostActions, { ActionsVariants } from '../../components/PostActions/PostActions';

export interface ContentPageProps {
    posts: IPost;
}

const ContentPage: FC<ContentPageProps> = ({posts}) => {

    const { id = 1 } = useParams()
    const {cards} = useSelector((state:any) => state.selectedCard)
    const selectedPost = cards.find((post: IPost) => post.id === +id);

    return (
        <article>
            <div className={styles.wrapper}>
                <div className={styles.contentPageContainer}>
                    <div className={styles.contentPageNav}>
                        <NavLink to="/home">Home</NavLink>
                        <span></span>
                        <p>Post {posts.id}</p>
                    </div>
                    <Title title={posts.title}/>
                    <img className={styles.contentPageImg} src={posts.image} alt="PostContentIMG" />
                    <div className={styles.contentPageTextContainer}>
                        <p className={styles.contentPageText}>
                            {posts.text}
                        </p>
                        <PostActions variant={ActionsVariants.forContent} post={selectedPost}/>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ContentPage;