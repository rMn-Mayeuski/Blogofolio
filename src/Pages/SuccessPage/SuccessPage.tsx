import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./SuccessPage.module.scss";

const SuccessPage: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.successPageContainer}>
                <HomeLink/>
                <Title title="Success"/>
                <div className={styles.successPageContainerContent}>
                    <p className={styles.successPageContainerContentText}>
                        Email confirmed.
                    </p>
                    <p className={styles.successPageContainerContentText}>
                        Your registration is now completed.
                    </p>
                    <NavLink to="/home">
                        <MainFormBTN text='Go to home'/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;