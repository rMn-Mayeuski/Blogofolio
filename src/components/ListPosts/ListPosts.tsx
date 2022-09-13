import React from 'react';
import styles from "./ListPosts.module.scss"
import MainPost from './MainPost/MainPost';
// import MPImg from "../../img/MainPostIMG.png"

const ID = Math.random() + 1;

const ListPosts: React.FC = () => {
    return (
        <section className='list-posts'>
            <div className="wrapper">
                <div className={styles.listPostsContainer}>
                    <MainPost/>
                </div>
            </div>
        </section>
    );
};

export default ListPosts;