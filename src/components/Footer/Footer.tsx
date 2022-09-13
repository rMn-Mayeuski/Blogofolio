import React from 'react';
import "../../App.scss";
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className={styles.footerContent}>
                    <p>©2022 Blogfolio</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;