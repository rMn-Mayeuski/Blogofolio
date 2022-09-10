import React from 'react';
import styles from "./Title.module.scss"

const Title = () => {
    return (
        <div className='wrapper'>
            <h1 className={styles.title}>
                Blog
            </h1>
        </div>
    );
};

export default Title;