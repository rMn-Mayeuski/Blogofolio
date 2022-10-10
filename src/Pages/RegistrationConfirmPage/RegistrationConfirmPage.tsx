import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./RegistrationConfirmPage.module.scss";

const RegistrationConfirmPage: FC = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.registrConfirmPageContainer}>
            <HomeLink/>
            <Title title="Registration Confirmation"/>
            <div className={styles.registrConfirmPageContainerContent}>
                <p className={styles.registrConfirmPageContainerContentText}>
                    Please activate your account with the activation link in the email <span>example@gmail.com</span>.
                </p>
                <p className={styles.registrConfirmPageContainerContentText}>
                    Please, check your email.
                </p>
                <NavLink to="/home">
                    <MainFormBTN text='Go to home'/>
                </NavLink>
            </div>
        </div>
    </div>
    );
};

export default RegistrationConfirmPage;