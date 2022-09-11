import React from 'react';
import icoLike from "../../../img/IconLike.svg"
import icoDislike from "../../../img/IconDislike.svg"
import icoBookmark from "../../../img/IconBookmark.svg"
import icoMore from "../../../img/IconMoreHorizontal.svg"
import styles from "./ListPostAction.module.scss"

const ListPostsAction: React.FC = () => {
    return (
        <div className={styles.mainPostContentBottom}>
                <div className={styles.mainPostContentBottomLeft}>
                    <img src={icoLike} alt="icoLike" />
                    <img src={icoDislike} alt="icoDislike" />
                </div>
                <div className={styles.mainPostContentBottomRight}>
                    <img src={icoBookmark} alt="icoBookmark" />
                    <img src={icoMore} alt="icoMore" />
                </div>
        </div>
    );
};

export default ListPostsAction;