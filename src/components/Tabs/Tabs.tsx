import React from 'react';
import styles from "./Tabs.module.scss"

const Tabs = () => {
    return (
        <section className={styles.tabs}>
            <div className='wrapper'>
                <div className={styles.tabsContainer}>
                    <button className={styles.underline}>All</button>
                    <button className={styles.underline}>My favorites</button>
                    <button disabled className={styles.underline}>Popular</button>
                </div>
            </div>
        </section>
    );
};

export default Tabs;