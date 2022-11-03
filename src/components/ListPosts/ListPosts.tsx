import React from 'react';
import styles from "./ListPosts.module.scss"
import RenderPostCard, {IPost} from "./RenderPostCard/RenderPostCard";

interface PostsListProps {
    postsConfig: IPost[];
}

const ListPosts: React.FC<PostsListProps> = ({postsConfig=[]}) => {
    
    const handleSizeForCard = (index:number) => {
        if ( index <= 4 ) {
            return "Tab"
        }
        else {
            return "Small"
        }
    }

    return  (
                <div className={styles.listPostsContainer}>
                    <div className={styles.listPostsContainerLeft}>
                        {postsConfig
                            .map((post: IPost) =>
                                <RenderPostCard key={post.id} {...post} size={"Main"}/>)
                            .filter((post, index) => index === 0)
                            }
                        <div className={styles.tabPostsContainer}>
                        {postsConfig
                            .map((post: IPost, index) =>
                                <RenderPostCard key={post.id} {...post} size={handleSizeForCard(index)}/>)
                            .filter((post, index) => index >= 1 && index <= 4 )}
                        </div>
                    </div>
                    <div className={styles.listPostsContainerRight}>
                        {postsConfig
                            .map((post: IPost, index) =>
                                <RenderPostCard key={post.id} {...post} size={handleSizeForCard(index)}/>)
                            .filter((post, index) => index >= 5)}
                    </div>
                </div>
    );
};

export default ListPosts;
