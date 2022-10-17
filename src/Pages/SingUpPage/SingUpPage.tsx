import React, { ChangeEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import Title from '../../components/Title/Title';
import { Routes } from '../../constants/Routes';
import { handleUserSignUp } from '../../SharedLogic/asuncActions/UserActions';
import styles from "../SignInPage/SignInPage.module.scss"

interface ISignUpForm {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SingUpPage: React.FC = () => {

    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();
    const handleUserRedirect = () => navigate(`${Routes.registerConfirm}?email=${signUpForm.email}`);

    const dispatch = useDispatch();
    const handleSubmit = () => {
        // @ts-ignore
        dispatch(handleUserSignUp(signUpForm.email, signUpForm.password, signUpForm.name, handleUserRedirect))
    }

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => setSignUpForm(prevState => ({...prevState, email}));
    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => setSignUpForm(prevState => ({...prevState, name}));
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => setSignUpForm(prevState => ({...prevState, password}));
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }}): void => setSignUpForm(prevState => ({...prevState, confirmPassword}));

    return (
        <div className={styles.wrapper}>
            <div className={styles.signInPageContainer}>
                <HomeLink/>
                <Title title='Sign Up'/>
                <form className={styles.formContainer}>
                    <FormInput 
                        id="name1"
                        type='text' 
                        label="Name" 
                        placeholder='Your name'
                        value={signUpForm.name}
                        onChange={handleSetName}
                    />
                    <FormInput 
                        id="email1" 
                        type='email' 
                        label="Email" 
                        placeholder='Your email'
                        value={signUpForm.email}
                        onChange={handleSetEmail}
                    />
                    <FormInput 
                        id="password1" 
                        type='password' 
                        label="Password" 
                        placeholder='Your password'
                        value={signUpForm.password}
                        onChange={handleSetPassword}
                    />
                    <FormInput 
                        id="confirmPassword1" 
                        type='password' 
                        label="Confirm password" 
                        placeholder='Confirm password'
                        value={signUpForm.confirmPassword}
                        onChange={handleSetConfirmPassword}
                    />
                    <div className={styles.formContainerBottom}>

                        <MainFormBTN
                            onSubmit={handleSubmit}
                            text='Sign Up'
                        />
                        <NavLink 
                            to="/signin">
                                <MinorFormBTN 
                                text={'Already have an account?'} 
                                colorText='Sign In'
                                />
                        </NavLink>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUpPage;