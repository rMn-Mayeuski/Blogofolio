import React from 'react';
import FormInput from '../../components/FormInput/FormInput';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./NewPassPage.module.scss";

const NewPassPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.newPassPageConteiner}>
                <HomeLink/>
                <Title title="New password"/>
                <form className={styles.newPassPageConteinerForm}>
                    <FormInput label='Password' placeholder='Your password' type='password' id="password"/>
                    <FormInput label='Confirm password' placeholder='Confirm your password' type='password' id="confirmPassword"/>
                    <MainFormBTN text='Set password'/>
                </form>
            </div>
        </div>
    );
};

export default NewPassPage;