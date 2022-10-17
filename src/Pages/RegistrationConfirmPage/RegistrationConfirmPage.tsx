import React, { FC } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import { Routes } from '../../constants/Routes';
import styles from "./RegistrationConfirmPage.module.scss";

const RegistrationConfirmPage: FC = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleRedirectToHomePage = () => navigate(Routes.blog);


    return (
    <div className={styles.wrapper}>
        <div className={styles.registrConfirmPageContainer}>
            <HomeLink/>
            <Title title="Registration Confirmation"/>
            <div className={styles.registrConfirmPageContainerContent}>
                <p className={styles.registrConfirmPageContainerContentText}>
                    Please activate your account with the activation link in the email 
                    <span>{location.search.split("email=")[1]}</span>
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