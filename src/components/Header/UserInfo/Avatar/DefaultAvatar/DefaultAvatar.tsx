import React, { FC } from 'react';
import icon from "../../../../../img/user.svg";
import styles from "../../UserInfo.module.scss";

const DefaultAvatar: FC = () => {
    return (
        <div className={styles.defaultAvatar}>
            <img src={icon} alt={icon} />
        </div>
    );
};

export default DefaultAvatar;