import React from 'react';
import "../../App/App.scss";
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.footerContent}>
                    <p>©2022 Blogfolio</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;