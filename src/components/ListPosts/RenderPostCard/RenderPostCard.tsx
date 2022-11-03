import React, { FC, MouseEventHandler, useEffect } from 'react';
import "../../../App/App.scss";
import MainPost from '../MainPost/MainPost';
import TabPost from '../TabPost/TabPost';
import SmalPost from '../SmallPost/SmallPost';
import { useDispatch } from 'react-redux';
import { selectCardAction } from '../../../SharedLogic/reducers/SelectedCardReducer';

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
    onClick?: MouseEventHandler,
    like?: boolean,
    dislike?: boolean,
    favorite?: boolean,
    likes?: number | string,
    dislikes?: number | string,
}

const RenderPostCard: FC<IPost & PostProps> = (props) => {
    const dispatch = useDispatch();

    const handleCardSelect = () => dispatch(selectCardAction(props))

    const renderPostCard = () => {
        switch (props.size) {
            case "Main":
                return <MainPost {...props} onClick={handleCardSelect}/>
            case "Tab":
                return <TabPost {...props} onClick={handleCardSelect}/>
            case "Small":
                return <SmalPost {...props} onClick={handleCardSelect}/>
        }
    }
    return renderPostCard()
};

export default RenderPostCard;