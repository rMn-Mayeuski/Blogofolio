import React, { FC } from 'react';
import "../../App.scss";
import MainPost from './MainPost/MainPost';
import TabPost from './TabPost/TabPost';
import SmalPost from './SmallPost/SmallPost';

type PostSizes = "Small" | "Tab" | "Main";

export interface PostProps {
    size: PostSizes;
}

export interface IPost {
    id: number,
    image: string,
    description: string,
    date: string,
    title: string,
    text: string,
}

const Test: FC<IPost & PostProps> = (props) => {
    const renderPostCard = () => {
        switch (props.size) {
            case "Main":
                return <MainPost {...props}/>
            case "Tab":
                return <TabPost {...props}/>
            case "Small":
                return <SmalPost {...props}/>
        }
    }
    return renderPostCard()
};

export default Test;