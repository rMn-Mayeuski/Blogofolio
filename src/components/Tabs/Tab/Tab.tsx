import React from 'react';
import styles from "../Tabs.module.scss"

interface Tab {
    title: string;
}

const Tab: React.FC<Tab> = ({title}) => {
    return (
        <button className={styles.underline}>{title}</button>
    );
};

export default Tab;