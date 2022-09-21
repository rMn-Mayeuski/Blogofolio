import React, { ChangeEvent, FC, useState } from 'react';
import styles from "./SignInPage.module.scss";
import Title from '../../components/Title/Title';
import FormInput from '../../components/FormInput/FormInput';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import { FormInputProps } from '../../components/FormInput/FormInput';
import { NavLink } from 'react-router-dom';


const SignInPage: React.FC = () => {
    // const [email, setEmail] = useState("");

    // const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

    return (
        <div className={styles.wrapper}>
            <div className={styles.signInPageContainer}>
                <Title title='Sign In'/>
                <form className={styles.formContainer} action="#">
                    <FormInput key={1} id="1" type='email' label="Email" placeholder='Your email'/>
                    <FormInput key={2} id="2" type='password' label="Password" placeholder='Your password'/>
                    <MinorFormBTN text='Forgot password?'/>
                    <div className={styles.formContainerBottom}>
                        <MainFormBTN text='Sign In'/>
                        <NavLink to="/signup"><MinorFormBTN text='Don’t have an account?' colorText='Sign Up'/></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;