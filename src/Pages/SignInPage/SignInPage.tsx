import React from 'react';
import styles from "./SignInPage.module.scss";
import Title from '../../components/Title/Title';
import FormInput from '../../components/FormInput/FormInput';
import MinorFormBTN from '../../components/MinorFormtBTN/MinorFormBTN';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import { NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInPageFields {
    email: string
    password: string
}

const SignInPage: React.FC = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<SignInPageFields>()

    const onSubmit: SubmitHandler<SignInPageFields> = ( data ) => {
        console.log(`Your email ${data.email}`)
        console.log(`Your pass ${data.password}`)
        console.log(data);
        
    }

    return   ( 
        <div className={styles.wrapper}> 
            <div className={styles.signInPageContainer}>
                <Title title='Sign In'/>
                <form  
                className={styles.formContainer} 
                action="#"
                onSubmit={handleSubmit(onSubmit)} 
                >
                    <FormInput 
                    // {...register("email",
                    //     {required: "Email is require field",
                    //     pattern: {
                    //         value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //         message: "Please enter valid email"
                    //     }
                    // }
                    // )} 
                    key={1} 
                    id="1" 
                    type='email' 
                    label="Email" 
                    placeholder='Your email'
                    />
                    {/* {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>} */}

                    <FormInput
                    // {...register("password",
                    // {required: "Password is require field"}
                    // )}   
                    key={2} 
                    id="2" 
                    type='password' 
                    label="Password" 
                    placeholder='Your password'
                    />
                    {/* {errors?.password && (<p style={{color: "red"}}>{errors.password.message}</p>)} */}

                    <MinorFormBTN text='Forgot password?' />
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