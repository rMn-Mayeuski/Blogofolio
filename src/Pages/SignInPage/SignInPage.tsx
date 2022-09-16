import React, { FC } from 'react';
import styles from "./SignInPage.module.scss";
import Title from '../../components/Title/Title';
import FormInput from '../../components/FormInput/FormInput';

const SignInPage: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.signInPageContainer}>
                <Title title='Sign In'/>
                <form className={styles.formContainer} action="#">
                    <FormInput id="id" type='email' label="Email" placeholder='Your email'/>
                    <FormInput id="id" type='password' label="Password" placeholder='Your password'/>
                </form>
            </div>
        </section>
    );
};

export default SignInPage;