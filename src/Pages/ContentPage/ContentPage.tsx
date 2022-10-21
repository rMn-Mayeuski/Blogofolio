import React, { FC } from 'react';
import Title from '../../components/Title/Title';
import styles from "./ContentPage.module.scss"
import ContentPageActions from './ContentPageActions/ContentPageActions';
import {IPost} from "../../components/ListPosts/RenderPostCard/RenderPostCard";
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectImgAction } from '../../SharedLogic/SelectedCardReducer';

export interface ContentPageProps {
    posts: IPost;
}

const ContentPage: FC<ContentPageProps> = ({posts}) => {

    const dispatch = useDispatch();
    const handleImgSelect = () => dispatch(selectImgAction(posts.image))

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
                    <img className={styles.contentPageImg} src={posts.image} alt="PostContentIMG" onClick={handleImgSelect} />
                    <div className={styles.contentPageTextContainer}>
                        <p className={styles.contentPageText}>
                            {posts.text}
                        </p>
                        <ContentPageActions post={posts}/>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ContentPage;