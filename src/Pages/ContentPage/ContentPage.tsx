import React from 'react';
import Title from '../../components/Title/Title';
import styles from "./ContentPage.module.scss"
import ContentPageActions from './ContentPageActions/ContentPageActions';
import {IPost} from "../../components/ListPosts/Test";
import { NavLink } from 'react-router-dom';

export interface ContentPageProps {
    posts: IPost | null;
}

const ContentPage: React.FC<ContentPageProps> = ({posts = null}) => {
    return (
        <article>
            <div className={styles.wrapper}>
                <div key={!!posts ? posts.id : "Err"} className={styles.contentPageContainer}>
                    <div className={styles.contentPageNav}>
                        <NavLink to="/home">Home</NavLink>
                        <span></span>
                        <p>Post {!!posts && posts.id}</p>
                    </div>
                    <Title title={!!posts ? posts.title : "Err"}/>
                    <img className={styles.contentPageImg} src={!!posts ? posts.image : "Err"} alt="astronaut" />
                    <div className={styles.contentPageTextContainer}>
                        <p className={styles.contentPageText}>
                            {!!posts && posts.text}
                        </p>
                        <ContentPageActions/>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ContentPage;