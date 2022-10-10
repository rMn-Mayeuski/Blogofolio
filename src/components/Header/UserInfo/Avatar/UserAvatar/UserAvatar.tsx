import React, { FC } from 'react';
import styles from "../../UserInfo.module.scss";

const UserAvatar = ({ url = "", alt = "", userName = "" }) => {
    const transformUserNameToAvatar = () => {
        return userName.split(" ").map(str => str.charAt(0).toUpperCase()).join("")
    }
    return (
        <div className={styles.userAvatar}>
            {!!url ? <img src={url} alt={alt} /> : <span>{transformUserNameToAvatar()}</span>}
        </div>
    );
};

export default UserAvatar;