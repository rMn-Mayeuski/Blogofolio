import React from 'react';
import Title from '../../components/Title/Title';
import styles from "./SearchPage.module.scss"
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';
import PostActions, { ActionsVariants } from '../../components/PostActions/PostActions';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ISearchPageProps {
    posts: IPost[],
}

const SearchPage: React.FC<ISearchPageProps> = ({posts = []}) => {

    const { id = 1 } = useParams()
    const {cards} = useSelector((state:any) => state.selectedCard)
    const selectedPost = cards.find((post: IPost) => post.id === +id);

    const location = useLocation();


    return (
        <section>
            <div className={styles.wrapper}>
                <Title title='Search results " "'/>
                <div className={styles.serachPageContent}>
                    {!!posts.length ? ( 
                        posts.map((item: IPost) => 
                        <div className={styles.serachPageContentCard} key={item.id}>
                            <div className={styles.serachPageContentCardTop}>
                                <img src={item.image} alt="img" />
                                <div className={styles.serachPageContentCardTopText}>
                                    <p className={styles.serachPageContentCardTopTextDate}>
                                        {item.date}
                                    </p>
                                    <h3 className={styles.serachPageContentCardTopTextTitle}>
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                            {/* <PostActions variant={ActionsVariants.forCards} post={selectedPost}/> */}
                        </div>
                        )
                    ) : (
                        <div>No results for your query</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SearchPage;