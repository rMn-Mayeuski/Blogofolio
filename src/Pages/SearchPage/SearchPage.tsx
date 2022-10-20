import React from 'react';
import Title from '../../components/Title/Title';
import styles from "./SearchPage.module.scss"
import img from "../../img/TabPostIMG1.png";
import ListPostsAction from '../../components/ListPosts/ListPostsAction/ListPostsAction';
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';

const SearchPage: React.FC<IPost> = (props) => {
    return (
        <section>
            <div className={styles.wrapper}>
                <Title title='Search results " "'/>
                <div className={styles.serachPageContent}>
                    <div className={styles.serachPageContentCard}>
                        <div className={styles.serachPageContentCardTop}>
                            <img src={img} alt="img" />
                            <div className={styles.serachPageContentCardTopText}>
                                <p className={styles.serachPageContentCardTopTextDate}>
                                    April 20, 2021
                                </p>
                                <h3 className={styles.serachPageContentCardTopTextTitle}>
                                        Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday,
                                    installing brackets and struts to support
                                </h3>
                            </div>
                        </div>
                        <ListPostsAction post={props}/>
                    </div>

                    <div className={styles.serachPageContentCard}>
                        <div className={styles.serachPageContentCardTop}>
                            <img src={img} alt="img" />
                            <div className={styles.serachPageContentCardTopText}>
                                <p className={styles.serachPageContentCardTopTextDate}>
                                    April 20, 2021
                                </p>
                                <h3 className={styles.serachPageContentCardTopTextTitle}>
                                    Astronauts prep for new solar arrays on nearly seven-hour spacewalk
                                </h3>
                            </div>
                        </div>
                        <ListPostsAction post={props}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchPage;