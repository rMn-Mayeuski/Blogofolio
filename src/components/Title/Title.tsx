import React from 'react';
import styles from "./Title.module.scss"

interface Title {
    title: any;
}

const Title: React.FC<Title> = ({title}) => {
    return (
        <h1 className={styles.title}>
            {title}
        </h1>
        
    );
};

export default Title;