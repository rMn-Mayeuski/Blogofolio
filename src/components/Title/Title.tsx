import React from 'react';
import styles from "./Title.module.scss"

interface Title {
    title: string;
}

const Title: React.FC<Title> = ({title}) => {
    return (
        <section className='title'>
            <div className='wrapper'>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default Title;