import React, { ChangeEventHandler, FC, useState } from 'react';
import styles from "./SignInPage.module.scss";
import Title from '../../components/Title/Title';
import FormInput from '../../components/FormInput/FormInput';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeLink from '../../components/HomeLink/HomeLink';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../SharedLogic/UseReducer';
import { Routes } from '../../constants/Routes';

interface ISignInForm {
    email: string,
    password: string
}

const SignInPage: FC = () => {
    const navigate = useNavigate()

    const handleUserNavigate = () => navigate(Routes.blog)

    const [signInForm, setSignInForm] = useState<ISignInForm>({ email: "", password: "" });

    const dispatch = useDispatch()

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => setSignInForm(prevState => ({...prevState, email}));
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => setSignInForm(prevState => ({...prevState, password}));

    const handelUserTokenCreate = async () => {
        const result = await fetch ("https://studapi.teachmeskills.by/auth/jwt/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: signInForm.email, password: signInForm.password })

        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.statusText)
            }
        })
            for (let item in result) {
                localStorage.setItem(item, result[item])
            }
    }

    const handleUpdateAccessToken = async () => {
        const refresh = localStorage.getItem( "refresh");

        const { accessToken } = await fetch( "https://studapi.teachmeskills.by/auth/jwt/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({refresh})
        }).then(res => {
            if (res.ok) {

                const json = res.json();

                console.log(json, "UPD Access token");

                return json;

            } else {
                throw new Error("Mess2")
            }
        })
        localStorage.setItem("access", accessToken);

        return accessToken
    }

    const handleVerifyToken = async () => {
        const token = localStorage.getItem("access");

        const result = {
            token: token,
            valid: false,
        }

        if (!!token) {
            await fetch( "https://studapi.teachmeskills.by/auth/jwt/verify/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {token: localStorage.getItem("access")})
        }).then(res => {
            if (res.ok) {

                const json = res.json();

                console.log(json, "Verify token");

                return json;
            } else {
                throw new Error("Mess")
            }
        })
            result.valid = true
        }
        return result
    }

    const handelUserInformationCall = async (token: string) => {
        return await fetch("https://studapi.teachmeskills.by/auth/users/me", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
        if (res.ok) {
            const json = res.json();

            console.log(json, "User Info");

            return json;
        }
    })
        .catch(console.log)
    }
    

    const handelUserInformationGet = async () => {

        const { valid, token } = await handleVerifyToken()

        let user = null;

        if (valid && token) {
            user = await handelUserInformationCall(token)
    } else {
            const token = await handleUpdateAccessToken()
            user = await handelUserInformationCall(token)
        }
        return user
    }

    const handleSignIn = async () => {
        try {
            await handelUserTokenCreate();
            const user = await handelUserInformationGet();

            console.log(user);
            
            if (user) {
                dispatch(setUserAction(user))
                
                handleUserNavigate()
            }
        } catch (e) {
            console.log(e);
        }
    }

    return   ( 
        <div className={styles.wrapper}> 
            <div className={styles.signInPageContainer}>
                <HomeLink/>

                <Title title='Sign In'/>

                <form  
                    className={styles.formContainer} 
                >
                    <FormInput 
                        id="email" 
                        type='email' 
                        label="Email"
                        value={signInForm.email}
                        onChange={handleSetEmail}
                        placeholder='Your email'
                    />
                    
                    <FormInput 
                        id="password"
                        type='password' 
                        label="Password" 
                        value={signInForm.password}
                        onChange={handleSetPassword}
                        placeholder='Enter Your password'
                    />

                    <NavLink to="/reset"><MinorFormBTN text='Forgot password?' /></NavLink>
                    <div className={styles.formContainerBottom}>

                        <MainFormBTN 
                            text='Sign In' 
                            onSubmit={handleSignIn}
                        />

                        <NavLink to="/signup"><MinorFormBTN text='Don’t have an account?' colorText='Sign Up'/></NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;