import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./HomeLink.module.scss";

const HomeLink: React.FC = () => {
    return (
        <div className={styles.homeLink}>
            <NavLink to="/home">Back to home</NavLink>
        </div>
    );
};

export default HomeLink;