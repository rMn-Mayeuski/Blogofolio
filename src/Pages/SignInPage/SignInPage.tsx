import React, { FC } from 'react';
import styles from "./SignInPage.module.scss";
import Title from '../../components/Title/Title';
import FormInput from '../../components/FormInput/FormInput';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';


const SignInPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.signInPageContainer}>
                <Title title='Sign In'/>
                <form className={styles.formContainer} action="#">
                    <FormInput id="id" type='email' label="Email" placeholder='Your email'/>
                    <FormInput id="id" type='password' label="Password" placeholder='Your password'/>
                    <MinorFormBTN text='Forgot password?'/>
                    <div className={styles.formContainerBottom}>
                        <MainFormBTN text='Sign In'/>
                        <MinorFormBTN text='Don’t have an account?' colorText='Sign Up'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;