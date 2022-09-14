import React from 'react';
import styles from "./ListPosts.module.scss"
import MainPost from './MainPost/MainPost';
import SmalPost from './SmallPost/SmallPost';
import TabPost from './TabPost/TabPost';
// import MPImg from "../../img/MainPostIMG.png"

const ID = Math.random() + 1;

const ListPosts: React.FC = () => {
    return (
        <section className='list-posts'>
            <div className="wrapper">
                <div className={styles.listPostsContainer}>
                    <div className={styles.listPostsContainerLeft}>
                        <MainPost/>
                        <div className={styles.tabPostsContainer}>
                            <TabPost/>
                        </div>
                    </div>
                    <div className={styles.listPostsContainerRight}>
                        <SmalPost/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListPosts;