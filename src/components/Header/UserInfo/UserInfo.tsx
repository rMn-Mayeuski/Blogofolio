import React from 'react';
import styles from "../Header.module.scss";

interface UserInfo {
    name: string;
    lastName: string;
    avatar?: any;
}

const UserInfo: React.FC<UserInfo> = ({name, lastName, avatar}) => {
    return (
        <div className={styles.headerUser}>
            {/* <img src={avatar} alt="logo" /> */}
            <p>{name} {lastName}</p>
        </div>
    );
};

export default UserInfo;