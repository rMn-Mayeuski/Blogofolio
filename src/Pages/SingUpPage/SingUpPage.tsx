import React from 'react';
import { NavLink } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import Title from '../../components/Title/Title';
import styles from "../SignInPage/SignInPage.module.scss"

const SingUpPage: React.FC = () => {

    const handleLogin = (e:any) => {
        e.preventDefault()
        console.log("Log")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.signInPageContainer}>
                <Title title='Sign Up'/>
                <form className={styles.formContainer} action="#" onSubmit={handleLogin}>
                    <FormInput key={16} id="4" type='text' label="Name" placeholder='Your name'/>
                    <FormInput key={14} id="6" type='email' label="Email" placeholder='Your email'/>
                    <FormInput key={26} id="8" type='password' label="Password" placeholder='Your password'/>
                    <FormInput key={29} id="9" type='password' label="Confirm password" placeholder='Confirm password'/>
                    <div className={styles.formContainerBottom}>
                        <MainFormBTN text='Sign Up'/>
                        <NavLink to="/signin"><MinorFormBTN text={'Already have an account?'} colorText='Sign In'/></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUpPage;