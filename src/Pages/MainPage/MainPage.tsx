import React, { FC, useEffect, useState } from 'react';
import ListPosts from '../../components/ListPosts/ListPosts';
import Tabs from '../../components/Tabs/Tabs';
import Title from '../../components/Title/Title';
import { IPost } from '../../components/ListPosts/RenderPostCard/RenderPostCard';
import { handlePosts } from '../../SharedLogic/asuncActions/PostActions';
import { useDispatch, useSelector } from 'react-redux';
import { TABS_CONFIG } from '../../components/Tabs/TabsConfig';
import { IRootState } from '../../SharedLogic/reducers/RootReducer';
import "../../App/mixin.scss";

const MainPage: FC = () => {

    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const { cards } = useSelector((state: IRootState) => state.selectedCard);
    const dispatch = useDispatch();

    const [posts, setPosts] = useState<IPost[]>([]);

    const filterPosts = () => {
        switch (activeTabItem) {
            case 2:
                return setPosts(cards.filter((card: IPost) => card.favorite));

            default:
                setPosts(cards)
        }
    }

    const getPosts = async () => {
        await dispatch(handlePosts())
    }

    useEffect(() => {
        if (!cards.length) {
            getPosts()
        }
    }, [])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    useEffect(() => {
        filterPosts();
    }, [activeTabItem , cards])

    return (
        <main style={{minHeight: "calc(100vh - 93px)"}}>
            <div className="wrapper">
                <Title title='Blog'/>
                <Tabs config={TABS_CONFIG} onClick={handleSetActiveTabItem} activeTabItem={activeTabItem}/>
                <ListPosts postsConfig={posts}/>
            </div>
        </main>
    );
};

export default MainPage;