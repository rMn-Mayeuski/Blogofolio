import React from 'react';
import styles from "./ListPosts.module.scss"
import ListPostsAction from './ListPostsAction/ListPostsAction';

type PostSizes = "Small" | "Tab" | "Main";

export interface IPost {
    "id": number,
    "image": string,
    "description": string,
    "date": string,
    "title": string,
}

export interface PostProps {
    size: PostSizes;
}

const ListPosts: React.FC<IPost & PostProps> = ({ id, image, description, date, title, size}) => {
    return  (

    <div key={id} className={styles.test}>
        {size}
            {size === "Tab" && <img className={styles.test} src={image} alt="img"/>}
        <div>
            <p>{date}</p>
            <h3>{title}</h3>
            {size === "Main" && <p>{description}</p>}
        </div>
        {size !== "Tab" && <img className={styles.test} src={image} alt="img"/>}
    </div>

        // <section className='list-posts'>
        //     <div className="wrapper">
        //         <div className={styles.listPostsContainer}>

        //             <div className={styles.listPostsContainerLeft}>
        //                 <div className={styles.tabPostsContainer}>

        //                 </div>
        //             </div>
        //             <div className={styles.listPostsContainerRight}>
                    
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default ListPosts;
