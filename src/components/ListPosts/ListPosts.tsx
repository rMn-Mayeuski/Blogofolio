import React from 'react';
import styles from "./ListPosts.module.scss"
import Test from './Test';
import {IPost} from "./Test";

interface PostsListProps {
    postsConfig: IPost[];
}

const ListPosts: React.FC<PostsListProps> = ({postsConfig=[]}) => {
    const handleSizeForCard = (index:number) => {
        if(index === 0) {
            return "Main"
        }
        else if (index >= 1 && index <= 4) {
            return "Tab"
        }
        else {
            return "Small"
        }
    }

    return  (
                <div className={styles.listPostsContainer}>
                    <div className={`${styles.listPostsContainerLeft}`}>
                    {postsConfig
                        .map((post, index) =>
                            <Test key={post.id} id={post.id} title={post.title} date={post.date}
                            image={post.image}  description={post.description} size={handleSizeForCard(index)}/>)
                        .filter((post, index) => index === 0)}
                        <div className={styles.tabPostsContainer}>
                        {postsConfig
                        .map((post, index) =>
                            <Test key={post.id} id={post.id} title={post.title} date={post.date}
                            image={post.image}  description={post.description} size={handleSizeForCard(index)}/>)
                        .filter((post, index) => index >= 1 && index <= 4 )}
                        </div>
                    </div>
                    <div className={styles.listPostsContainerRight}>
                        {postsConfig
                        .map((post, index) =>
                            <Test key={post.id} id={post.id} title={post.title} date={post.date}
                            image={post.image} description={post.description} size={handleSizeForCard(index)}/>)
                        .filter((post, index) => index >= 5)}
                    </div>
                </div>
    );
};

export default ListPosts;
