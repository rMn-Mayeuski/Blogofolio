import React, { FC, useEffect } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./RegistrationConfirmPage.module.scss";

const RegistrationConfirmPage: FC = () => {

    const location = useLocation();

    const { uid, token} = useParams();

    const handleUserActivate = () => {
        fetch ("https://studapi.teachmeskills.by/auth/users/activation/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({uid, token})
        })
        .then(res => res.json())
        .then(console.log, console.log)
    }

    useEffect( () => {
        if (uid && token) {
            handleUserActivate()
        }
    }, [])

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