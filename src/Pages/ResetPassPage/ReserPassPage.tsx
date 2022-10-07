import React from 'react';
import FormInput from '../../components/FormInput/FormInput';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./ResetPassPage.module.scss";

const ReserPassPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.resetPassPageContainer}>
                <HomeLink/>
                <Title title="Reset password"/>
                <form className={styles.resetPassPageContainerForm}>
                    <FormInput label='Email' placeholder='Your email' type='email' id={Math.random()}/>
                    <MainFormBTN text='Reset'/>
                </form>
            </div>
        </div>
    );
};

export default ReserPassPage;