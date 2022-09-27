import React from 'react';
import Title from '../../components/Title/Title';
import styles from "./ContentPage.module.scss"
import ContentPageActions from './ContentPageActions/ContentPageActions';
import {IPost} from "../../components/ListPosts/Test";
import { NavLink } from 'react-router-dom';

interface ContentPageProps {
    posts: IPost[];
    selectedPost: number;
}

const ContentPage: React.FC<ContentPageProps> = ({posts=[], selectedPost}) => {
    return (
        <article>
            <div className={styles.wrapper}>
            {posts.filter(post => post.id === selectedPost)
                .map(post =>
                <div key={post.id} className={styles.contentPageContainer}>
                    <div className={styles.contentPageNav}>
                        <NavLink to="/home">Home</NavLink>
                        <span></span>
                        <p>Post {post.id}</p>
                    </div>
                    <Title title={post.title}/>
                    <img className={styles.contentPageImg} src={post.image} alt="astronaut" />
                    <div className={styles.contentPageTextContainer}>
                        <p className={styles.contentPageText}>
                            {post.text}
                        </p>
                        <ContentPageActions/>
                    </div>
                </div>)}
            </div>
        </article>
    );
};

export default ContentPage;