import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./UserInfo.module.scss";
import Avatar from './Avatar/Avatar';

interface UserInfo {
    userName?: string;
    avatarUrl?: string;
    className?: string;
}

const UserInfo: React.FC<UserInfo> = (
    {
        userName="", 
        avatarUrl="",
        className="", 
    }) => {
    return (
        <div className={`${styles.userInfoWrapper} ${!!userName && styles.user} ${className}`}>
                <Link to={!!userName ? "/home" : "/signin"}>
                    <div className={styles.userInfo}>
                        <Avatar 
                            userName={userName} 
                            url={avatarUrl} 
                        />
                        {!!userName && <span className={styles.userName}>{userName}</span>}
                    </div>
                </Link>
            </div>
    );
};

export default UserInfo;