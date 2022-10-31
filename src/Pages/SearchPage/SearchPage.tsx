import React, { FC } from 'react';
import Title from '../../components/Title/Title';
import styles from "./SearchPage.module.scss"
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';
import SearchPageCard from './SearchPageCard/SearchPageCard';

interface ISearchPageProps {
    posts: IPost[],
    query: string,
}

const SearchPage: FC<ISearchPageProps> = ({posts = [], query = ""}) => {
    return (
        <section>
            <div className={styles.wrapper}>
                <Title title={!!query ? `Search Results '${query}'` : ""} />
                <div className={styles.serachPageContent}>
                    {!!posts.length ? ( 
                        posts.map((item: IPost) => 
                            <SearchPageCard key={item.id} {...item}/>
                        )
                    ) : (
                        <div>{!query ? "Enter Search Word into Search Field" : `No Results for '${query}'`}</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SearchPage;