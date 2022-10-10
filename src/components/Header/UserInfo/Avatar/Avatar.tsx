import React, { FC } from 'react';
import DefaultAvatar from './DefaultAvatar/DefaultAvatar';
import UserAvatar from './UserAvatar/UserAvatar';

interface AvatarProps {
    userName: string
    url?: string
    alt?: string
}

const Avatar:  FC<AvatarProps> = (props) => {
    return !!props.userName ? <UserAvatar { ...props } /> : <DefaultAvatar />
};

export default Avatar;