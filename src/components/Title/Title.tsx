import React from 'react';
import styles from "./Title.module.scss"

const Title: React.FC = () => {
    return (
        <section className='title'>
            <div className='wrapper'>
                <h1 className={styles.title}>
                    Blog
                </h1>
            </div>
        </section>
    );
};

export default Title;