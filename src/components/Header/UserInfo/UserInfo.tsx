import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./UserInfo.module.scss";
import Avatar from './Avatar/Avatar';
import { useSelector } from 'react-redux';

interface UserInfo {
    userName?: string;
    avatarUrl?: string;
    className?: string;
}

const UserInfo: React.FC<UserInfo> = (
    {
        avatarUrl="",
        className="", 
    }) => {

        const { user } = useSelector((state: any) => state.user)

    return (
        <div className={`${styles.userInfoWrapper} ${!!user?.username && styles.user} ${className}`}>
                <Link to={!!user?.username ? "/home" : "/signin"}>
                    <div className={styles.userInfo}>
                        <Avatar 
                            userName={user?.username} 
                            url={avatarUrl} 
                        />
                        {!!user?.username && 
                        <span className={styles.userName}
                        >
                            {(user?.username).split(/(?=[A-Z])/).join(" ")}
                        </span>}
                    </div>
                </Link>
            </div>
    );
};

export default UserInfo;